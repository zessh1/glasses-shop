import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlassesShop from "./GlassesShop/GlassesShop";
import LoginPage from "./LoginPage/LoginPage";
import MainPage from "./MainPage/MainPage";
import CartPage from "./CartPage/CartPage";
import ProductDetails from "./ProductDetails/ProductDetails";
import { RegisterPage } from "./RegisterPage/RegisterPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/glasses", element: <GlassesShop /> },
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <RegisterPage /> },

  {
    path: "Cart",
    element: <CartPage removeItem={() => console.log("aa")} />,
  },
  { path: "/product-details/:id", element: <ProductDetails /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
