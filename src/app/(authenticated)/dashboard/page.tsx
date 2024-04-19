import React from "react";

const DashboardPage = () => {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div className="border-b border-gray-200 bg-white p-6">
            {`You're logged in!`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
