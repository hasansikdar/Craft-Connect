import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Layout/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRouter><Main></Main></PrivateRouter>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      { path: '/home', element: <Home></Home> },
    ]
  },
  { path: "/login", element: <Login></Login> },
]);
