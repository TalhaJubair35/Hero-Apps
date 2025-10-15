import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";

const Apps = () => {
  const apps = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("none"); // none | high-low | low-high

  // 🔍 Filter apps by title or company name
  const filteredApps = apps.filter(
    (app) =>
      app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 🔢 Sort filtered apps by download count
  const sortedApps = [...filteredApps].sort((a, b) => {
    if (sortOrder === "high-low") return b.downloads - a.downloads;
    if (sortOrder === "low-high") return a.downloads - b.downloads;
    return 0;
  });

  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Search + Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search apps by name or company..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered w-full md:w-1/2 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
        />

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
        >
          <option value="none">Sort by Downloads</option>
          <option value="high-low">High → Low</option>
          <option value="low-high">Low → High</option>
        </select>
      </div>

      {/* Apps Grid */}
      {sortedApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sortedApps.map((app) => (
            <Link
              key={app.id}
              to={`/appdetails/${app.id}`}
              className="card bg-base-100 shadow-sm hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 cursor-pointer"
            >
              <figure className="px-5 pt-5">
                <img src={app.image} alt={app.title} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{app.title}</h2>
                <p className="text-sm text-gray-500">{app.companyName}</p>

                <div className="flex gap-5 justify-center mt-2">
                  <div className="flex items-center gap-1 bg-gray-300 rounded-xl px-3 py-1">
                    <img className="w-4" src={download} alt="Downloads" />
                    <p>{app.downloads.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-300 rounded-xl px-3 py-1">
                    <img className="w-4" src={rating} alt="Rating" />
                    <p>{app.ratingAvg}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No apps found matching "<span className="font-semibold">{searchQuery}</span>"
        </p>
      )}
    </div>
  );
};

export default Apps;
