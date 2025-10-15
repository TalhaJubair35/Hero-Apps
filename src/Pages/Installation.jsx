import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  if (installedApps.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-[#392f5a] mb-5">
          No Installed Apps Yet
        </h2>
        <Link to="/apps" className="btn bg-[#632EE3] text-white rounded-xl">
          Browse Apps
        </Link>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-4xl font-bold text-center text-[#392f5a] mb-10">
        Installed Apps
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-200 border p-3"
          >
            <figure className="px-5 pt-5">
              <img src={app.image} alt={app.title} className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-xl font-bold text-[#392f5a]">{app.title}</h3>
              <p className="text-gray-500">{app.companyName}</p>
              <p className="text-sm text-gray-400">{app.size} MB</p>
              <button
                onClick={() => handleUninstall(app.id)}
                className="btn bg-red-500 hover:bg-red-600 text-white rounded-xl mt-3"
              >
                🗑️ Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
