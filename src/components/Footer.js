import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Footer = (props) => {
  const [userMenu, setUserMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <footer className="bg-white border-t-2 ">
      <div className="flex flex-row items-center justify-center">
        <Link to="/" className="p-5 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="black"
            stroke-width="1.5"
            className="w-10 h-10"
            aria-hidden="true"
            data-slot="icon"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
            />
          </svg>
        </Link>
        <Link to="/stats" className="p-5 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="black"
            className="w-10 h-10"
            stroke-width="1.5"
            aria-hidden="true"
            data-slot="icon"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
            />
          </svg>
        </Link>
        <Link to="/air-quality" className="p-5 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -3 20 20"
            stroke="black"
            className="w-10 h-10"
          >
            <g
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path d="M17 1a2 2 0 0 1 0 4h-6" />
              <path
                d="M14 13a2 2 0 0 0 0-4H4m3-8h4M1 5h6"
                data-name="primary"
              />
            </g>
          </svg>
        </Link>
        <Link to="/forum" className="p-5 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="black"
            className="w-10 h-10"
            stroke-width="1.5"
            aria-hidden="true"
            data-slot="icon"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3a49.5 49.5 0 0 1-4.02-.163 2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        </Link>
        {userMenu && (
          <div className="absolute right-0 mb-36 bg-gray-200 w-40">
            <div className="flex flex-col p-5">
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
        {/* Mobile */}
        <>
          <button
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
            className={`${mobileMenu ? "hidden" : ""} p-5 border`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="black"
              stroke-width="1.25"
              aria-hidden="true"
              className="w-10 h-10"
              data-slot="icon"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {mobileMenu ? (
            <div className="flex flex-col">
              <button
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
                className={`${mobileMenu ? "" : "hidden"} p-5 border`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="black"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Navbar additionalStyles="space-y-4 py-2 bg-gray-200 -mt-60 -ml-4 absolute space-x-4 text-gray-700 " />
            </div>
          ) : null}
        </>
      </div>
    </footer>
  );
};

export default Footer;
