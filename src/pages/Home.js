import { useNavigate } from "react-router-dom";
import ScorePoint from "../components/ScorePoint";
import Cookies from "js-cookie";
import Login from "./Login";

const Home = () => {
  const navigate = useNavigate();
  const userToken = Cookies.get("userToken");

  if (!userToken) {
    return <Login />;
  }

  return (
    <div className="">
      <ScorePoint />
      <img src="" alt="Tree" className="h-30 w-30" />
    </div>
  );
};

export default Home;
