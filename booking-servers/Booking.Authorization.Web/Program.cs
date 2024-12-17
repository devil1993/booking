
using Booking.Common.Web.Middlewares;
using Booking.Authorization;
using Booking.Authorization.Extensions;
using Booking.Authorization.DataAccess.Extensions;
using Booking.Authorization.Web.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Booking.Common.Web;

namespace Booking.Authorization.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            var authConfig = new Booking.Authorization.Web.Models.AuthenticationConfig();
            var connectionStrings = new Booking.Authorization.Web.Models.ConnectionStrings();
            builder.Configuration.Bind("Authentication", authConfig);
            builder.Configuration.Bind("ConnectionStrings", connectionStrings);

            builder.Services.AddSingleton(connectionStrings);
            builder.Services.AddBookingContext();
            builder.Services.AddAuthorizationPolicy();
            builder.Services.AddAuthorizationDataAccess(connectionStrings.RBACPG);
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
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
    }
}
