import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Layout/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import EditProfile from "../Pages/EditProfile/EditProfile";
import SellerPro from "../Pages/SellerPro/SellerPro";
import FollowPages from "../Pages/FollowPages/FollowPages";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
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
import FriendRequest from "../Shared/LeftSideMenubar/Friends/FriendRequest/FriendRequest";
import FriendSuggestion from "../Shared/LeftSideMenubar/Friends/FriendSuggestion/FriendSuggestion";
import Discover from "../Pages/Groups/Discover/Discover";
import AllFriends from "../Shared/LeftSideMenubar/Friends/AllFriends/AllFriends";
import PostDetails from "../Pages/PostDetails/PostDetails";
import CustomList from "../Shared/LeftSideMenubar/Friends/CustomList/CustomList";
import ProfileOfUser from "../Pages/AboutProfile/ProfileOfUser";
import Sidebar from "../Shared/Chatting/SideBarChat/SidebarChat";
import UserById from "../Pages/AboutProfile/UserProfileById/UserById";
import AdvertisementLayout from "../Pages/Adevertisement/AdvertisementLayout";
import CreateAdvertisement from "../Pages/Adevertisement/CreateAdvertisement";
import Chatting from "../Shared/Chatting/Chatting";
import DiscoverPage from "../Pages/Fb_Pages/DiscoverPage/DiscoverPage";

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
      { path: "/advertisement/create", element: <AdvertisementLayout /> },
      { path: "/feature/pages", element: <Pages></Pages> },
      {
        path: "/feature/pages/discover",
        element: <DiscoverPage></DiscoverPage>,
      },
      {
        path: "/feature/watch",
        element: <Watch></Watch>,
      },
      {
        path: "/feature/groups",
        element: <Groups></Groups>,
      },
      {
        path: "/feature/groups/discover",
        element: <Discover></Discover>,
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
      {
        path: "/feature/profile",
        element: <ProfileOfUser />,
      },
      {
        path: "/friends",
        element: <Friends></Friends>,
        children: [],
      },

      { path: "/friends/requests", element: <FriendRequest></FriendRequest> },
      {
        path: "/friends/suggestion",
        element: <FriendSuggestion></FriendSuggestion>,
      },
      { path: "/friends/friendList", element: <CustomList></CustomList> },
      { path: "/friends/list", element: <AllFriends></AllFriends> },
      { path: "/chats", element: <Chatting></Chatting> },
      {
        path: "/postDetails/:id",
        element: <PostDetails></PostDetails>,
        loader: ({ params }) =>
          fetch(
            `https://craft-connect-server-blond.vercel.app/postDetails/${params.id}`
          ),
      },
      {
        path: "/user/:email",
        element: <UserById />,
        loader: ({ params }) =>
          fetch(
            `https://craft-connect-server-blond.vercel.app/user/${params?.email}`
          ),
      },
    ],
  },
  { path: "/login", element: <Login></Login> },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
