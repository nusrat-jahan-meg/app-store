import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import AppsDetails from "../Pages/AppsDetails";
import MyInstallation from "../Pages/MyInstallation";
import NotFound from "../Pages/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children : [
        {
        index : true,
         path : '/'   ,
        Component: Home,
        },
        {
            path:"/apps",
            Component : AllApps,
        },
        {
            path:"/apps/id",
            Component : AppsDetails, 
        },
          {
            path:"/installation",
            Component : MyInstallation,
        },
         
    ]
  },
]);