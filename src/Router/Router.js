import { createBrowserRouter } from "react-router-dom";
import Stories from "../Pages/Stories/Stories";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Stories />,
  },
]);
