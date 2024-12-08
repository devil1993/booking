import "./App.css";
import BookingCalendar from "./Dashboard/BookingCalendar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./Landing/Welcome";
import Login from "./Login";
import Register from "./Register";
import React from "react";


const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Welcome /> },
      { path: "/dashboard", element: <BookingCalendar /> },
      { path: "/login", element: <Login />},
      { path: "/register", element: <Register />}
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default App;
