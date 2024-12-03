import "./App.css";
import BookingCalendar from "./Dashboard/BookingCalendar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./Landing/Welcome";
import Login from "./Login/Login";
import Register from "./Login/Register";
import { AppRoutes } from "./Routes";


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

const App: React.FC<{}> = () => {
  return <RouterProvider router={router} />;
}

export default App;
