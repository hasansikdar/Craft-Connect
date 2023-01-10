import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import PostBox from "../Pages/PostBox/PostBox";

export const Routes = createBrowserRouter([
  { path: "/", element: <PostBox /> },
  { path: "/login", element: <Login></Login> },
]);
