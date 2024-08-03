import React, { useState, useEffect } from "react";
import NotificationBar from "./NotificationBar";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const [userMenu, setUserMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    if (
      Cookies.get("userToken") &&
      (location.pathname === "/logout" ||
        location.pathname === "/delete_account")
    ) {
      Cookies.remove("userToken");
    }
  }, [location.pathname]);

  useEffect(() => {
    setUserToken(Cookies.get("userToken"));
  }, [location.pathname, location]);

  return (
    <div>
      {/* Regular */}
      <header className="p-4 sm:p-6 bg-black hidden md:inline">
        <div className="flex justify-center py-2 md:py-0">
          <Link to="/" className="text-white">
            <img src="/images/logo.png" className="mr-3 h-8" alt="Logo" />
          </Link>
          <NotificationBar additionalStyles="flex space-x-4 text-white" />
          <button
            onClick={() => {
              setUserMenu(!userMenu);
            }}
            className="text-white text-lg flex space-x-2 absolute right-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0 1 12 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
              />
            </svg>
          </button>
          {userMenu && (
            <div className="absolute mt-14 right-5 bg-gray-200 w-40">
              <div className="flex flex-col p-4">
                <Link
                  to="/logout"
                  className="text-gray-700 text-lg flex space-x-2"
                >
                  <span>Logout</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m17 16 4-4m0 0-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile */}
      {!userToken ? (
        <></>
      ) : (
        <header className="bg-white md:hidden">
          <div className="flex justify-between py-2 md:py-0 sb">
            <Link
              to="/"
              className="flex self-center text-2xl font-semibold whitespace-nowrap text-black"
            >
              <img src="images/logo.png" className="h-12" alt="Logo" />
            </Link>
            <button
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
              className={`${mobileMenu ? "hidden" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                stroke="ffffff"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#79B859"
                  strokeLinecap="round"
                  strokeWidth="1.25"
                  d="M9.107 2.674A6.52 6.52 0 0 1 12 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 0 0 .692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.775 25.775 0 0 1-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 0 0 5.25 9.71v-.705c0-1.074.233-2.092.65-3.002M7.5 19c.655 1.748 2.422 3 4.5 3 .245 0 .485-.017.72-.05M16.5 19a4.498 4.498 0 0 1-1.302 1.84"
                />
              </svg>
            </button>

            {mobileMenu ? (
              <div className="flex flex-col">
                <button
                  onClick={() => {
                    setMobileMenu(!mobileMenu);
                  }}
                  className={`${mobileMenu ? "" : "hidden"} ml-20`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#79B859"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <NotificationBar additionalStyles="space-y-4 py-2 bg-gray-200 absolute space-x-4 text-gray-700 w-[120px] mt-2 " />
              </div>
            ) : null}
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
