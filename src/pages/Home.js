import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Login from "./Login";
import { Link } from "react-router-dom";
import MostRecentActivity from "../components/MostRecentActivity";
import News from "../components/News";
import HomeTable from "../components/HomeTable";

const articles = [
  {
    src: "/images/article.jpg",
    alt: "alt",
    title:
      "Why Toronto needs to embrace e-scooters: A path to a more connected and a sustainable Toronto",
    body: "Shared e-scooters have the potential to propel Toronto forward, enhancing its role as a global hub for...",
  },
  {
    src: "/images/article2.jpg",
    alt: "alt",
    title:
      "Toronto skin-care company founder stays true to mission of offering stylish, sustainable products",
    body: "Reviews and recommendations are unbiased and products are independently selected. Postmedia may earn an ...",
  },
  {
    src: "/images/article3.jpg",
    alt: "alt",
    title:
      "Author shares tips to save thousands of dollars with greener habits",
    body: "Candice Batista is founder and editor-in-chief of The Eco Hub, a green lifestyle website, and the author of a...",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const userToken = Cookies.get("userToken");
  const [article, setArticle] = useState(0);

  if (!userToken) {
    return <Login />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-lg font-bold mt-4 ml-6">Lastest Eco News</h1>
        <div className="flex items-center justify-center mb-4 mt-2 ">
          <button className="pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <News
            src={articles[article].src}
            alt={articles[article].alt}
            title={articles[article].title}
            body={articles[article].body}
          />
          <button
            className="pl-4"
            onClick={() => {
              if (article === articles.length - 1) {
                setArticle(0);
              } else {
                setArticle(article + 1);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <HomeTable />
      {/* <div className="pb-20">
        <div className="w-full">
          <table className="w-full">
            <caption className="p-3 font-bold text-lg">Recent Activity</caption>
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left text-xs p-2">Activity</th>
                <th
                  className="text-center text-xs p-2"
                  style={{ width: "30%" }}
                >
                  Points Earned
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr
                className="bg-slate-200"
                style={{ backgroundColor: "#bfdba7" }}
              >
                <td className="text-left p-2">
                  Took a train to Toronto on August 4th
                </td>
                <td className="text-center p-2">32</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="text-left p-2">Ran 6.7 km on August 1st</td>
                <td className="text-center p-2">7</td>
              </tr>
              <tr
                className="bg-slate-200"
                style={{ backgroundColor: "#bfdba7" }}
              >
                <td className="text-left p-2">
                  Auto-loaded your Presto Card for $100
                </td>
                <td className="text-center p-2">42</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="text-left p-2">...</td>
                <td className="text-center p-2">...</td>
              </tr>
              <tr
                className="bg-slate-200"
                style={{ backgroundColor: "#bfdba7" }}
              >
                <td className="text-left p-2">...</td>
                <td className="text-center p-2">...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      {/* <div>
>>>>>>> 60246aae354df8dca53335400d3563d20339bfb8
        <MostRecentActivity />
        <Link
          to="/recent_activity"
          className="border-b border-b-blue-400 text-blue-400 pb-20"
        >
          View More
        </Link>
      </div> */}

      <div className="fixed bottom-16 my-8 w-80 p-4 rounded-xl bg-[#79B859] justify-center items-center">
        <Link
          className="text-lg flex justify-center items-center text-white"
          to="/green-card"
        >
          EcoTrack Card
        </Link>
      </div>
    </div>
  );
};

export default Home;
