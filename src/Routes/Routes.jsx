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
import PrivateRoutes from "./PrivateRoutes";
import UpdateCraftItem from "../pages/UpdateCraft/UpdateCraftItem";
import Category from "../pages/Category/Category";

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
        loader: () => fetch("http://localhost:5000/crafts"),
      },
      {
        path: "/add-item",
        element: (
          <PrivateRoutes>
            <AddCraftItem></AddCraftItem>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-item",
        element: (
          <PrivateRoutes>
            <MyArtCraftItem></MyArtCraftItem>
          </PrivateRoutes>
        ),
      },
      {
        path: "/craft-details/:id",
        element: (
          <PrivateRoutes>
            <CarftDetails></CarftDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
      {
        path: "/craft-update/:id",
        element: <UpdateCraftItem></UpdateCraftItem>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
      {
        path: "/category/:name",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.name}`),
      },
    ],
  },
]);

export default router;
