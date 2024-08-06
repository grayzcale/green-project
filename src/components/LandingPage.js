import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="flex flex-col mt-60 align-center items-center">
      <img src="/images/EcoTrackLogo.png" alt="main logo" />
      <span className="text-lg font:mono">Measure, Reduce, & Celebrate!</span>
      <Link to="/login" className="mt-14 p-2 my-4 text-[#79B859] bg-[#DFEBBD] w-60 text-xl text-center rounded-xl">
        Login
      </Link>
      <Link to="/sign-up" className="p-2 bg-[#9DC82A] text-white w-60 text-xl mt-4 text-center rounded-xl">
        Sign up
      </Link>
    </div>
  );
};
export default LandingPage;
