import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Layout/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import EditProfile from "../Pages/EditProfile/EditProfile";
import SellerPro from "../Pages/SellerPro/SellerPro";
import FollowPages from "../Pages/FollowPages/FollowPages";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UserProfile from "../Pages/UserProfile/UserProfile";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import FeatureLayout from "../Layout/FeatureLayout";
import Watch from "../Pages/Watch/Watch";
import Groups from "../Pages/Groups/Groups";
import MarketPlace from "../Pages/MarketPlace/MarketPlace";
import BookMarked from "../Pages/BookMarked/BookMarked";
import AdCenter from "../Pages/AdCenter/AdCenter";
import AdsManager from "../Pages/AdsManager/AdsManager";
import Pages from "../Pages/Fb_Pages/Pages";
import Friends from "../Shared/LeftSideMenubar/Friends/Friends";
import Profile from "../Pages/UserProfile/Profile";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Main></Main>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/home", element: <Home></Home> },
      { path: "/editprofile", element: <EditProfile></EditProfile> },
      { path: "/sellerpro", element: <SellerPro></SellerPro> },
      { path: "/pages", element: <FollowPages></FollowPages> },
      { path: "/products/:id", element: <ProductDetails></ProductDetails> },
    ],
  },
  {
    path: "/feature",
    element: (
      <PrivateRouter>
        <FeatureLayout></FeatureLayout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/feature/watch",
        element: <Watch></Watch>,
      },
      {
        path: "/feature/groups",
        element: <Groups></Groups>,
      },
      {
        path: "/feature/marketplace",
        element: <MarketPlace></MarketPlace>,
      },
      {
        path: "/feature/bookmarked",
        element: <BookMarked></BookMarked>,
      },
      {
        path: "/feature/adcenter",
        element: <AdCenter></AdCenter>,
      },
      {
        path: "/feature/adsmanager",
        element: <AdsManager></AdsManager>,
      },
      {
        path: "/feature/pages",
        element: <Pages></Pages>,
      },
    ],
  },
  {
    path: "/feature/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/feature/friends",
    element: <Friends></Friends>,
  },
  { path: "/login", element: <Login></Login> },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
