import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import GlassesShop from "./GlassesShop/GlassesShop";
import LoginPage from "./LoginPage";

const router = createBrowserRouter([
  { path: "/", element: <GlassesShop /> },
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <RegisterForm /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
