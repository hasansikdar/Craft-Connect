import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Layout/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import EditProfile from "../Pages/EditProfile/EditProfile";
import Profile from "../Pages/Profile/Profile";
import SellerPro from "../Pages/SellerPro/SellerPro";
import FollowPages from "../Pages/FollowPages/FollowPages";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";


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
      { path: '/profile', element: <Profile></Profile> },
      { path: '/editprofile', element: <EditProfile></EditProfile> },
      { path: '/sellerpro', element: <SellerPro></SellerPro> },
      { path: '/pages', element: <FollowPages></FollowPages> },
      { path: '/products/:id', element: <ProductDetails></ProductDetails> },
    ]
  },
  { path: "/login", element: <Login></Login> },
]);
