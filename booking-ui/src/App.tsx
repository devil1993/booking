import "./App.css";
import BookingCalendar from "./dashboard/BookingCalendar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./landing/Welcome";
import Login from "./login";
import Register from "./register";
import { AppRoutes } from "./routes";


const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Welcome /> },
      { path: AppRoutes.Dashboard, element: <BookingCalendar /> },
      { path: AppRoutes.Login, element: <Login /> },
      { path: AppRoutes.Register, element: <Register /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default App;
