import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Notifications = (props) => {
  //   const [dropdown, setDropdown] = useState(false);

  return (
    <li
    className={`${props.item.index !== 1 ? "ml-4" : ""}`}
      key={props.index}
      //   onMouseOver={() => {
      //     setDropdown(true);
      //   }}
      //   onMouseLeave={() => {
      //     setDropdown(false);
      //   }}
    >
      {props.item.notification}
      {/* <Link
        to={props.item.url}
        className={`${props.item.url === "/account" ? "ml-4" : ""}`}
      >
        {props.item.title}
      </Link> */}
      {/* {props.item.submenu ? (
        <>
          <button
            type="button"
            onClick={() => {
              setDropdown(!dropdown);
            }}
            aria-expanded={dropdown ? "true" : "false"}
          >
            <div className="flex border-b-2">
              {props.item.title}
              {dropdown ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m5 15 7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              )}
            </div>
          </button>
          <ul className={`${dropdown ? "space-y-4 mt-2" : "hidden"}`}>
            {props.item.submenu.map((submenu, i) => (
              <li key={i} className="">
                {submenu.submenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setDropdown(!dropdown);
                      }}
                      aria-expanded={dropdown ? "true" : "false"}
                    >
                      <span className="flex">
                        {submenu.title}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m5 15 7-7 7 7"
                          />
                        </svg>
                      </span>
                    </button>
                    <div className="flex flex-col my-2 space-y-2">
                      {submenu.submenu.map((submenu2, j) => (
                        <Link
                          to={submenu2.url}
                          className="text-left ml-4 "
                          key={j}
                        >
                          <span>{submenu2.title}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={submenu.url}>{submenu.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link to={props.item.url} className={`${props.item.url === "/" ? "ml-4" : ""}`}>
          {props.item.title}
        </Link>
      )} */}
    </li>
  );
};

export default Notifications;
