import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import Loadingspinner from "../Components/Loadingspinner";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Show spinner while navigating */}
      {navigation.state === "loading" ? (
        <Loadingspinner />
      ) : (
        <div className="flex-1">
          <Outlet />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MainLayout;
