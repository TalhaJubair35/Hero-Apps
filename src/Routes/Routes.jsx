import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/Apps.json"),
      },
      {
        path: "apps",
        element: <Apps />,
        loader: () => fetch("/Apps.json"),
      },
      {
        path: "installation",
        element: <Installation />,
      },
      {
        path: "appdetails/:id", // ✅ Dynamic route
        element: <AppDetails />,
        loader: () => fetch("/Apps.json"), // So details can use same data
      },
    ],
  },
]);

export default router;
