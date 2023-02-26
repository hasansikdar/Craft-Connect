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
          <div
            id="main-content"
            className="h-full bg-[#2A2A2A]  relative lg:ml-64"
          >
            <main className="pt-6 px-4 py-8 h-screen overflow-y-auto">
              <Outlet />
            </main>
          </div>
        </div>
      </>
    );
};

export default AdminPanel;