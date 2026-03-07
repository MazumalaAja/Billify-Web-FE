// IMPORT
import { createBrowserRouter , type RouteObject } from "react-router";
import Layout from "../components/layout";
import HomePage from "../pages/homePage";
import HistoryPage from "../pages/historyPage";

// MY-CODE
const routes : RouteObject[] = [
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        index:true,
        element:<HomePage />
      },
      {
        path:"history",
        element:<HistoryPage />
      }
    ]
  }
]

// EXPORT
export const router = createBrowserRouter(routes);