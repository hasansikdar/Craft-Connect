import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PostBox from "../Pages/PostBox/PostBox";

export const Routes = createBrowserRouter([
    {path: '/postbox', element: <PostBox/>},
    {path: '/', element: <Home></Home>}
])