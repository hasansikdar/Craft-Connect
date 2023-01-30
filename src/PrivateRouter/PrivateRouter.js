import React, { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Context/UserContext";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(Authcontext);

  if (loading) {
    return (
      <div className="text-3xl text-center flex items-center justify-center w-full text-black h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRouter;
