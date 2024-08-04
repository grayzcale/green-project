import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./Login";
import { Link } from "react-router-dom";
import MostRecentActivity from "../components/MostRecentActivity";

const Home = () => {
  const navigate = useNavigate();
  const userToken = Cookies.get("userToken");

  if (!userToken) {
    return <Login />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">PUT NEWS STUFF HERE</div>
      <div>
        <MostRecentActivity />
        <Link
          to="/recent_activity"
          className="border-b border-b-blue-400 text-blue-400"
        >
          View More
        </Link>
      </div>

      <div className="fixed bottom-16 my-8 w-80 p-4 rounded-xl bg-[#79B859] justify-center items-center">
        <Link
          className="text-lg flex justify-center items-center text-[#484D6D]"
          to="/green-card"
        >
          Green Card
        </Link>
      </div>
    </div>
  );
};

export default Home;
