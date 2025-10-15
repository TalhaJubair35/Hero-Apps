import React from "react";
import { Link, useLoaderData } from "react-router";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";

const Apps = () => {
  const apps = useLoaderData();
  console.log(apps);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-11/12 mx-auto my-10">
      {apps.map((app) => (
        <Link
          key={app.id}
          to={`/appdetails/${app.id}`}
          className="card bg-base-100 shadow-sm hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 cursor-pointer"
        >
          <figure className="px-5 pt-5">
            <img src={app.image} alt={app.title} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{app.companyName}</h2>

            <div className="flex gap-5 justify-center">
              <div className="flex items-center gap-1 bg-gray-300 rounded-xl px-3 py-1">
                <img className="w-4" src={download} alt="Downloads" />
                <p>{app.downloads}</p>
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
  );
};

export default Apps;
