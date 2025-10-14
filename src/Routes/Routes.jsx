import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layout/MainLayout";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index:true,
        Component: Home,
        loader:()=> fetch('./Apps.json')
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component:Installation ,
      },
    ],
  },
]);
export default router;
