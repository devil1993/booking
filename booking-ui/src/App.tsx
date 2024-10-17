import { useState } from "react";
import "./App.css";
import BookingCalendar from "./Dashboard/BookingCalendar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./Landing/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Welcome /> },
      { path: "/dashboard", element: <BookingCalendar /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
