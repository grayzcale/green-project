import { useState } from "react";
import Tips from "../components/Tips";
import Leaderboard from "../components/Leaderboard";
import ScorePoint from "../components/ScorePoint";

const flowerArr = [
  "Flower_stg1.png",
  "Flower_stg2.png",
  "Flower_stg3.png",
  "Flower_stg4.png",
  "Flower_stg5.png",
];
const Flower = () => {
  const [flower, setFlower] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="rounded-full"
        onClick={() => {
          if (flower === flowerArr.length - 1) {
            setFlower(0);
          } else {
            setFlower(flower + 1)
          }
        }}
      >
        <ScorePoint point={5} score={27} />
        <img
          src={`images/${flowerArr[flower]}`}
          className="w-64 h-64"
          alt="flower"
        />
      </button>

      {/* <Tips
        tips={
          "An air pollution map shows pollutant levels across regions using color codes and markers. It highlights areas with poor air quality, tracks pollution sources, and trends. These maps are vital for monitoring, public health, and policy-making."
        }
      /> */}
      <Leaderboard />
    </div>
  );
};
export default Flower;
