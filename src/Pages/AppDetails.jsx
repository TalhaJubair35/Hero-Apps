import React from "react";
import { useParams, useLoaderData, Link } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();

  // Find the selected app
  const app = apps.find((item) => String(item.id) === id);

  if (!app) {
    return <p className="text-center text-red-500 mt-10">App not found!</p>;
  }

  return (
    <div className="w-10/12 mx-auto py-10">
      <div className="card bg-base-100 shadow-xl p-5">
        <figure className="px-5 pt-5">
          <img src={app.image} alt={app.title} className="rounded-xl" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-3xl font-bold text-[#392f5a]">{app.title}</h2>
          <p className="text-gray-600">{app.description}</p>
          <p className="text-lg mt-3 font-semibold">
            Company: {app.companyName}
          </p>
          <p>Downloads: {app.downloads}</p>
          <p>Rating: ⭐ {app.ratingAvg}</p>
          
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
