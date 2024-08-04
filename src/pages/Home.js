import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Login from "./Login";
import { Link } from "react-router-dom";
import MostRecentActivity from "../components/MostRecentActivity";
import News from "../components/News";

const articles = [
  {
    src: "/images/article.jpg",
    alt: "alt",
    title: "Why Toronto needs to embrace e-scooters: A path to a more connected and a sustainable Toronto",
    body: "Shared e-scooters have the potential to propel Toronto forward, enhancing its role as a global hub for jobs and innovation. They can connect our communities, ease traffic congestion, boost the local economy, and help meet our climate and transportation goals.",
  },
  {
    src: "/images/article2.jpg",
    alt: "alt",
    title: "Toronto skin-care company founder stays true to mission of offering stylish, sustainable products",
    body: "Reviews and recommendations are unbiased and products are independently selected. Postmedia may earn an affiliate commission from purchases made through links on this page. A fan of the luxe natural skin-care brands she had encountered from Europe, Gaelyne Leslie set out to create a similar line of her own in 2010.",
  },
  {
    src: "/images/article3.jpg",
    alt: "alt",
    title: "Author shares tips to save thousands of dollars with greener habits",
    body: "Candice Batista is founder and editor-in-chief of The Eco Hub, a green lifestyle website, and the author of a new book, Sustained: Creating a Sustainable House Through Small Changes, Money-Saving Habits, and Natural Solutions. She spoke to us from her home in Toronto, where she lives with her husb",
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
      <div className="flex items-center justify-center mx-6 mb-4 mt-2 w-3/4">
        
        <News
          src={articles[article].src}
          alt={articles[article].alt}
          title={articles[article].title}
          body={articles[article].body}
        />
        <button
          onClick={() => {
            if (article === articles.length-1) {
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
      <div>
        <MostRecentActivity />
        <Link
          to="/recent_activity"
          className="border-b border-b-blue-400 text-blue-400 pb-20"
        >
          View More
        </Link>
      </div>

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
