using Booking.UserManagement.Extensions;
using Booking.UserManagement.DataAccess.Extensions;
using Booking.Common.Web.Middlewares;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Hosting;
using Booking.UserManagement.Web.Middlewares;
using static System.Net.WebRequestMethods;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var authConfig = new Booking.UserManagement.Web.Models.AuthenticationConfig();
var connectionStrings = new Booking.UserManagement.Web.Models.ConnectionStrings();
builder.Configuration.Bind("Authentication", authConfig);
builder.Configuration.Bind("ConnectionStrings", connectionStrings);

builder.Services.AddSingleton(connectionStrings);
builder.Services.AddUserManagementPolicy();
builder.Services.AddUserManagementDataAccess(connectionStrings.UsersPG);
//foreach (var issuer in authConfig.Issuers)
//{
var issuer = authConfig.Issuers.First();
    builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(
        JwtBearerDefaults.AuthenticationScheme,
        issuer,
        options =>
        {
            options.Authority = issuer;
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateLifetime = true,
                ValidIssuer = issuer,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
            };
            options.Events = new JwtBearerEvents
            {
                OnAuthenticationFailed = context =>
                {
                    var logger = context.HttpContext.RequestServices.GetRequiredService<ILogger<Program>>();
                    logger.LogError("Authentication failed {0}.", context.Exception);
                    return Task.CompletedTask;
                },
            };
        });
//}
builder.Services.AddAuthorization();
builder.Services.AddControllers();
    
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseMiddleware<ContextExtractionMiddleware>();
app.UseMiddleware<UserInfoExtractionMiddleware>();
app.UseAuthorization();
app.MapControllers();

app.Run();
