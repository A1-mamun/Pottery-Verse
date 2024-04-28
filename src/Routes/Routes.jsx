import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllArtCraftItem from "../pages/AllArtCraftItem/AllArtCraftItem";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyArtCraftItem from "../pages/MyArtCraftItem/MyArtCraftItem";
import CarftDetails from "../pages/Shared/CarftDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-item",
        element: <AllArtCraftItem></AllArtCraftItem>,
      },
      {
        path: "/add-item",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/my-item",
        element: <MyArtCraftItem></MyArtCraftItem>,
      },
      {
        path: "/craft-details",
        element: <CarftDetails></CarftDetails>,
      },
    ],
  },
]);

export default router;
