import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./Navbar";

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
        <div className="flex justify-center py-6 md:py-0">
          <Link to="/" className="text-white">
            <img src="/images/logo.png" className="mr-3 h-8" alt="Logo" />
          </Link>
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
              viewBox="0 0 24 24">
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
          <div className="flex justify-between items-center py-5 md:py-0 sb">
            <Link
              to="/"
              className="flex self-center text-2xl mt-2 font-semibold whitespace-nowrap text-black"
            >
              <img src="images/logo.png" className="h-16" alt="Logo" />
            </Link>
            
            <button className="ml-6">
              <span className="text-xl font-bold" style={{ color: "#ffcb3b"}}>AI</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffcb3b" className="size-5 mb-5 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>
            </button>

            <button
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
              className={`${mobileMenu ? "hidden" : "mr-8 mb-2"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#79B859"
                strokeWidth="1"
                aria-hidden="true"
                className="w-10 h-10"
                data-slot="icon"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            {mobileMenu ? (
              <div className="flex flex-col pr-8">
                <button
                  onClick={() => {
                    setMobileMenu(!mobileMenu);
                  }}
                  className={`${mobileMenu ? "" : "hidden"} mb-2`}
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
                <Navbar additionalStyles="space-y-6 py-2 bg-gray-200 pr-2 justify-left items-left mt-10 ml-1 absolute space-x-6 text-gray-700 right-1"/>
              </div>
            ) : null}
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
