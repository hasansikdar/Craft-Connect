import { createBrowserRouter } from "react-router-dom";
import PostBox from "../Pages/PostBox/PostBox";

export const Routes = createBrowserRouter([
    { path: '/', element: <PostBox /> }
])