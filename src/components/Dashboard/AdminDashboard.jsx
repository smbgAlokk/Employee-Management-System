import React from "react";
import Header from "../DashboardCreator/Header";
import CreateTask from "../DashboardCreator/CreateTask";
import AllTask from "../DashboardCreator/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
