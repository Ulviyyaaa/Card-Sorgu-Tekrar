import { createBrowserRouter } from "react-router-dom";
import AddProductPage from "../View/AddProductPage";
import Login from "../View/Login";
import ProductPage from "../View/ProductPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductPage/>,
    },
    {
        path: "/add/:id",
        element: <AddProductPage/>,
      },
      {
        path: "/log",
        element: <Login/>,
      },
  ]);
  export {router}