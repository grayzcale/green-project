import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Logout = (props) => {
  return (
    <div className="pb-40 w-screen h-screen flex flex-col items-center justify-center space-y-6">
      <span className="text-xl font-semibold">You have logged out</span>
      <Link
        to="/login"
        className="text-gray-700 font-semibold bg-white hover:bg-gray-200 border border-gray-700 focus:ring-0 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Login
      </Link>
    </div>
  );
};

export default Logout;
