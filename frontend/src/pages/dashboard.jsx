import React from "react";
import { useSelector } from "react-redux";
import DonorDashboard from "./DonorDashboard";
import RequestorDashboard from "./RequestorDashboard";
import AdminDashboard from "./AdminDashboard";
import VendorDashboard from "./VendorDashboard";

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div>
            {user?.role === "donor" && <DonorDashboard />}
            {user?.role === "requestor" && <RequestorDashboard />}
            {user?.role === "admin" && <AdminDashboard />}
            {user?.role === "vendor" && <VendorDashboard />}
        </div>
    );
};

export default Dashboard;
