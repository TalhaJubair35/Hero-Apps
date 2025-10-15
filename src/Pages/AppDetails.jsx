import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  const app = apps.find((item) => String(item.id) === id);
  const [isInstalled, setIsInstalled] = useState(false);

  // Check if app is already installed (localStorage)
  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    const found = installed.find((a) => a.id === app?.id);
    setIsInstalled(!!found);
  }, [app?.id]);

  if (!app) {
    return <p className="text-center text-red-500 mt-10">App not found!</p>;
  }

  const handleDownload = () => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];

    // Prevent duplicate installation
    if (!installed.find((a) => a.id === app.id)) {
      installed.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installed));
      setIsInstalled(true);
    }
  };

  return (
    <div className="w-10/12 mx-auto py-10">
      <div className="card bg-base-100 shadow-xl p-5">
        <figure className="px-5 pt-5">
          <img src={app.image} alt={app.title} className="rounded-xl" />
        </figure>

        <div className="card-body text-center space-y-3">
          <h2 className="text-3xl font-bold text-[#392f5a]">{app.title}</h2>
          <p className="text-gray-600 italic">{app.description}</p>
          <p className="text-lg font-semibold">
            Company: <span className="text-[#632EE3]">{app.companyName}</span>
          </p>
          <p>Downloads: {app.downloads.toLocaleString()}</p>
          <p>Rating: ⭐ {app.ratingAvg}</p>
          <p>Size: {app.size} MB</p>

          {/* Download Button */}
          {!isInstalled ? (
            <button
              onClick={handleDownload}
              className="btn bg-[#632EE3] text-white hover:bg-[#7b46f3] rounded-xl mt-3"
            >
              ⬇️ Download & Install
            </button>
          ) : (
            <button
              disabled
              className="btn bg-gray-400 text-white rounded-xl mt-3 cursor-not-allowed"
            >
              ✅ Installed
            </button>
          )}
        </div>

        {/* Ratings Graph */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-center text-[#392f5a] mb-5">
            Ratings Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={app.ratings} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#632EE3" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
