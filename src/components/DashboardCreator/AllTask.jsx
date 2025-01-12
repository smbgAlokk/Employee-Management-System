import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const userData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      {/* Header Bar */}
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5">Failed Task</h5>
      </div>

      {/* All Task List */}
      <div className="h-[80%] overflow-auto">
        {userData && userData.length > 0 ? (
          userData.map((elem, idx) => (
            <div
              key={idx}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="text-lg font-medium  w-1/5">
                {elem?.firstName || "N/A"}
              </h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">
                {elem?.taskCounts?.newTask ?? 0}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {elem?.taskCounts?.active ?? 0}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-white">
                {elem?.taskCounts?.completed ?? 0}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">
                {elem?.taskCounts?.failed ?? 0}
              </h5>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500"> N user data available</p>
        )}
      </div>
    </div>
  );
};

export default AllTask;
