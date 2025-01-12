import React from "react";
import Header from "../DashboardCreator/Header";
import TaskListNumbers from "../DashboardCreator/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, changeUser }) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={changeUser} data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
