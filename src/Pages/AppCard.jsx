import React from "react";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
  <>
    <Link to='/appdetails' className="card bg-base-100  shadow-sm hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 cursor-pointer">
      <figure className="px-5 pt-5">
        <img
          src={app.image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{app.companyName}</h2>

        <div className="card-actions flex-1">
          <div className="flex gap-1 bg-gray-300 rounded-xl p-2">
            <img className="w-3.5" src={download} alt="" />
            <p>{app.downloads}</p>
          </div>
          <div className="flex gap-1 bg-gray-300 rounded-xl p-2">
            <img className="w-3.5" src={rating} alt="" />
            <p>{app.ratingAvg}</p>
          </div>
        </div>
      </div>
      
    </Link>
    
    </>
  );
};

export default AppCard;
