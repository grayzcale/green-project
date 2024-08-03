import { useNavigate } from "react-router-dom";
import ScorePoint from "../components/ScorePoint";
import Cookies from "js-cookie";
import Login from "./Login";

const Home = () => {
  const navigate = useNavigate();
  const userToken = Cookies.get("userToken");

  if (!userToken) {
    return <Login />
  }

  return (
    <div className="flex flex-wrap justify-center space-x-5 border-2 rounded-lg m-5 p-5">
      <div>
        <main>
          <div className="">
            <div className="flex flex-col items-center justify-center md:columns-3 md:block">
              <ScorePoint />
              {/* {menus.map((menu) => (
                <button
                  className="lg:w-80 lg:h-50 rounded-lg hover:bg-orange-500 flex flex-col justify-center items-center p-4"
                  onClick={() => navigate(menu.link)}
                  key={menu.menu}
                >
                  {menu.menu}
                  <img
                    className="w-20 h-20 md:w-40 md:h-40"
                    alt={menu.menu}
                    src={menu.image}
                  />
                </button>
              ))} */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
