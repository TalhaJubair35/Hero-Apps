import React from "react";
import Hero from "../assets/hero.png";
import { Link, useLoaderData } from "react-router";
import AppCard from "./AppCard";

const Home = () => {
  const apps = useLoaderData();
  const featuredApps = apps.slice(0, 8);

  return (
    <>
      <section className="flex flex-col  justify-center items-center w-11/12 mx-auto pt-10  pb-0">
        <div className="space-y-5  text-center mb-10">
          <h2 className="text-6xl font-bold leading-20 max-w-xl mx-auto ">
            We Build <br />
            <span className="text-[#632ee3] text-6xl font-bold">
              {" "}
              Productive
            </span>
            <span className="text-[#392f5a] text-6xl font-bold "> Apps</span>
          </h2>

          <p className="italic max-w-9/12 mx-auto mb-10">
            At
            <span className="text-[#392f5a] font-bold"> HERO.IO</span>, we craft
            innovative apps designed to make everyday life simpler, smarter, and
            more exciting. Our goal is to turn your ideas into digital
            experiences that truly make an impact
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/games"
              className="btn btn-xl  hover:shadow-xl rounded-xl"
              target="blank"
            >
              Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              className="btn btn-xl  hover:shadow-xl rounded-xl"
              target="blank"
            >
              App Store
            </a>
          </div>
        </div>
        <img src={Hero} alt="" />
      </section>
      <section className=" bg-gradient-to-tl to-[#632EE3] from-[#9F62F2] ">
        <div className="pt-10 flex flex-col justify-center items-center">
          <h2 className="text-white font-bold text-4xl text-center">
            {" "}
            Trusted by Millions, Built for You
          </h2>
          <div className="stats stats-vertical lg:stats-horizontal  text-white py-10">
            <div className="stat space-y-3 text-white">
              <p>Total Downloads</p>
              <p className="stat-value  text-5xl">29.6M</p>
              <p className="stat-desc text-white">21% more than last month</p>
            </div>
            <div className="stat space-y-3 text-white">
              <p>Total Reviews</p>
              <p className="stat-value  text-5xl">906K</p>
              <p className="stat-desc text-white">46% more than last month</p>
            </div>
            <div className="stat space-y-3 text-white">
              <p>Active Apps</p>
              <p className="stat-value  text-5xl">132+</p>
              <p className="stat-desc text-white">31 more will Launch</p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="mt-5 flex flex-col gap-5">
          <h2 className="text-4xl font-bold text-center text-[#392f5a] flex justify-center gap-3">
            Trending Apps
          </h2>
          <p className="text-center text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 ">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <div className="flex justify-center mb-10">
          <Link to="/apps" className="btn w-fit">
            Show All
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
