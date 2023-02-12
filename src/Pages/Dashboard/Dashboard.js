import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import DashboardNav from './DashboardNav';
import DashboardSidebar from './DashboardSidebar';
const Dashboard = () => {
    return (
        <>
            <Helmet>
                <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
            </Helmet>
            <div>
                <DashboardNav />
                <DashboardSidebar />
                <div
                    id="main-content"
                    className="h-full bg-[#2C2048]  relative lg:ml-64"
                >
                    <main className="pt-6 px-4 py-8 h-screen overflow-y-auto">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>

    );
};

export default Dashboard;