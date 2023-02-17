import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Context/UserContext';
import UseAdmin from '../Pages/AdminPanel/UseAdmin';

const AdminRoute = ({children}) => {
     const { user, loading } = useContext(Authcontext);
     const [isAdmin, isAdminLoading] = UseAdmin(user?.email);
     const location = useLocation();
    //  console.log(isAdmin);
     if (loading || isAdminLoading) {
       return(
        <div>
            <p>Loading.....</p>
        </div>
       );
     }

     if (user && isAdmin) {
       return children;
     }

     return (
       <Navigate to="/login" state={{ form: location }} replace></Navigate>
     );
};

export default AdminRoute;