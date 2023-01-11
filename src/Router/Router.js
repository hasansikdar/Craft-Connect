import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PostBox from "../Pages/PostBox/PostBox";
import Stories from "../Pages/Stories/Stories";

export const Routes = createBrowserRouter([
  { path: "/stories", element: <PostBox /> },
  { path: "/login", element: <Login></Login> },
  {
    path: "/",
    element: <Stories />,
  },
  {path: '/home', element: <Home></Home>}
]);