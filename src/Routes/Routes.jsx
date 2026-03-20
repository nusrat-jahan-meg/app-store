import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import AppsDetails from "../Pages/AppsDetails";
import MyInstallation from "../Pages/MyInstallation";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children : [
        {
        index : true,
        Component: Home,
        loader: () => fetch('/appData.json')
        },
        {
            path:"/apps",
            Component : AllApps,
             loader:()=> fetch("/appData.json")
        },
        {
            path:"/apps/:id",
            Component : AppsDetails, 
            loader:()=> fetch("/appData.json")
        },
          {
            path:"/installation",
            Component : MyInstallation,
        },
         
    ]
  },
]);