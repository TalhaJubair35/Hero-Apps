import React from "react";
import { Link } from "react-router";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";

const AppCard = ({ app }) => {
  return (
    <Link
      to={`/appdetails/${app.id}`} // ✅ dynamic route link
      className="card bg-base-100 shadow-sm hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 cursor-pointer"
    >
      <figure className="px-5 pt-5">
        <img
          src={app.image}
          alt={app.title || app.companyName}
          className="rounded-xl"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{app.companyName}</h2>

        <div className="flex gap-10">
          <div className="flex gap-1 bg-gray-300 rounded-xl p-2">
            <img className="w-3.5" src={download} alt="Downloads icon" />
            <p>{app.downloads}</p>
          </div>
          <div className="flex gap-1 bg-gray-300 rounded-xl p-2">
            <img className="w-3.5" src={rating} alt="Ratings icon" />
            <p>{app.ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
