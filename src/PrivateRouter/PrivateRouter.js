import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Context/UserContext';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(Authcontext);

    if(loading){
        return <h1 className='text-3xl text-center mt-5'>Loading...</h1>
    }


    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>



};

export default PrivateRouter;