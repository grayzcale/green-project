import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./Login";

const Home = () => {
  const navigate = useNavigate();
  const userToken = Cookies.get("userToken");

  if (!userToken) {
    return <Login />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">PUT NEWS STUFF HERE</div>
      <div>PUT RECENT ACTIVITY HERE (transit, health app, purchases)</div>
    </div>
  );
};

export default Home;
