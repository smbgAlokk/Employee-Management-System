import React from "react";
import Header from "../DashboardCreator/Header";
import CreateTask from "../DashboardCreator/CreateTask";
import AllTask from "../DashboardCreator/AllTask";

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
