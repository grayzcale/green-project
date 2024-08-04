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
      <div className="w-full">
        <table className="w-full">
          <caption className="p-3 font-bold text-lg">Recent Activity</caption>
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left text-xs p-2">Activity</th>
              <th className="text-center text-xs p-2" style={{ width: "30%" }}>Points Earned</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="bg-slate-200" style={{ backgroundColor: "#bfdba7" }}>
              <td className="text-left p-2">Took a train to Toronto on August 4th</td>
              <td className="text-center p-2">32</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="text-left p-2">Ran 6.7 km on August 1st</td>
              <td className="text-center p-2">7</td>
            </tr>
            <tr className="bg-slate-200" style={{ backgroundColor: "#bfdba7" }}>
              <td className="text-left p-2">Auto-loaded your Presto Card for $100</td>
              <td className="text-center p-2">42</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="text-left p-2">...</td>
              <td className="text-center p-2">...</td>
            </tr>
            <tr className="bg-slate-200" style={{ backgroundColor: "#bfdba7" }}>
              <td className="text-left p-2">...</td>
              <td className="text-center p-2">...</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div>
        <MostRecentActivity />
        <Link
          to="/recent_activity"
          className="border-b border-b-blue-400 text-blue-400"
        >
          View More
        </Link>
      </div> */}

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
