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
                <DashboardNav/>
                <DashboardSidebar />
                <div
                    id="main-content"
                    class="h-full bg-gray-50 relative overflow-y-auto lg:ml-64"
                >
                    <main>
                        <div class="pt-6 px-4">
                            <Outlet/>
                        </div>
                    </main>
                </div>
            </div>
        </>

    );
};

export default Dashboard;