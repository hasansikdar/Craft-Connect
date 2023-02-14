import React from 'react';
import DashboardNav from '../Dashboard/DashboardNav';
import Navbar from '../Navbar/Navbar';
import AdminSideBar from './AdminSideBar';
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
    return (
      <>
        <Helmet>
          <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
        </Helmet>
        <div>
          <DashboardNav></DashboardNav>
          <AdminSideBar></AdminSideBar>
        </div>
      </>
    );
};

export default AdminPanel;