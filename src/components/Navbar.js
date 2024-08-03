import MenuItems from "./MenuItems";
import { menuItems } from "../assets/menuitems";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <ul className={`${props.additionalStyles}`}>
        {menuItems.map((menu, index) => {
          return <MenuItems item={menu} index={index} key={index} />;
        })}
        <Link to="/logout" className="text-gray-700 flex space-x-2 md:hidden">
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
      </ul>
    </nav>
  );
};

export default Navbar;
