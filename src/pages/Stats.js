import { useState } from "react";
import ScorePoint from "../components/ScorePoint";
import "../assets/hc.css";
import { Link } from "react-router-dom";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Stats = () => {
  const randomInt = () => Math.floor(Math.random() * 100) + 1;

  const [v1, setv1] = useState(randomInt());
  const [v2, setv2] = useState(randomInt());
  const [v3, setv3] = useState(randomInt());
  const [v4, setv4] = useState(randomInt());
  const [v5, setv5] = useState(randomInt());

  const [cval, setCVal] = useState(Math.ceil((v1 + v2 + v3 + v4 + v5) / 5));
  const resetCVal = () => {
    setv1(randomInt());
    setv2(randomInt());
    setv3(randomInt());
    setv4(randomInt());
    setv5(randomInt());
    console.log(v1, v2, v3, v4, v5);
    setCVal(Math.ceil((v1 + v2 + v3 + v4 + v5) / 5));
  };

  const [graphRange, setGraphRange] = useState("monthly");
  const ranges = ["monthly", "daily", "yearly"];
  const changeGraphRangeR = (event, dir) => {
    const currIndex = ranges.indexOf(graphRange);
    let newIndex = 0;
    if (dir === 1) {
      newIndex = currIndex === ranges.length - 1 ? 0 : currIndex + 1;
    } else if (dir === -1) {
      newIndex = currIndex === 0 ? ranges.length - 1 : currIndex - 1;
    }
    setGraphRange(ranges[newIndex]);

    resetCVal();
  };

  const mapRange = (x, in_min, in_max, out_min, out_max) => {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  const getColor = (v, color) => {
    let r = mapRange(v, 0, 100, 200, 0);
    const g = mapRange(v, 0, 100, 0, 200);
    if (color) {
      // r = mapRange(v, 0, 100, 0, color[2]);
      return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;
    }
    return `rgb(${r}, ${g}, 0)`;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <ScorePoint />
      <div className="flex flex-wrap justify-center border-2 rounded-lg m-2 p-5">
        <span className="pb-3 font-bold">Total Environmental Score</span>
        <CircularProgressbar
          className="size-36"
          value={cval}
          text={`${cval}%`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: "round",
            trailColor: "#000000",
            pathColor: getColor(cval),
            textColor: "#000000",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
      <div className="flex flex-wrap justify-center space-x-5 border-2 rounded-lg m-2 mb-20 p-5">
        <div className="">
          <div className="grid grid-cols-3">
            <button onClick={(event) => changeGraphRangeR(event, -1)}>
              <img
                className="size-5 mx-auto"
                src="images/left-arrow.png"
                alt="left arrow"
              />
            </button>
            <span className="block w-full text-center italic">
              {graphRange.charAt(0).toUpperCase() + graphRange.slice(1)}
            </span>
            <button onClick={(event) => changeGraphRangeR(event, 1)}>
              <img
                className="size-5 mx-auto"
                src="images/right-arrow.png"
                alt="right arrow"
              />
            </button>
          </div>
          {graphRange === "monthly" && (
            <select
              className="block text-center mx-auto rounded-lg my-2 p-1"
              onChange={resetCVal}
            >
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>...</option>
            </select>
          )}
          {graphRange === "daily" && (
            <select
              className="block text-center mx-auto rounded-lg my-2 p-1"
              onChange={resetCVal}
            >
              <option>Jan 1st</option>
              <option>Jan 2nd</option>
              <option>Jan 3rd</option>
              <option>...</option>
            </select>
          )}
          {graphRange === "yearly" && (
            <select
              className="block text-center mx-auto rounded-lg my-2 p-1"
              onChange={resetCVal}
            >
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>...</option>
            </select>
          )}
          <div
            className="grid grid-cols-5 w-30 gap-3"
            style={{ height: "200px" }}
          >
            <div
              className="block w-full rounded-lg"
              style={{
                backgroundColor: getColor(v1, [200, 64, 61]),
                height: `${v1 * 2}px`,
                position: "relative",
                top: `${(100 - v1) * 2}px`,
              }}
            ></div>
            <div
              className="block w-full rounded-lg"
              style={{
                backgroundColor: getColor(v2, [135, 53, 63]),
                height: `${v2 * 2}px`,
                position: "relative",
                top: `${(100 - v2) * 2}px`,
              }}
            ></div>
            <div
              className="block w-full rounded-lg"
              style={{
                backgroundColor: getColor(v3, [265, 46, 68]),
                height: `${v3 * 2}px`,
                position: "relative",
                top: `${(100 - v3) * 2}px`,
              }}
            ></div>
            <div
              className="block w-full rounded-lg"
              style={{
                backgroundColor: getColor(v4, [26, 64, 56]),
                height: `${v4 * 2}px`,
                position: "relative",
                top: `${(100 - v4) * 2}px`,
              }}
            ></div>
            <div
              className="block w-full rounded-lg"
              style={{
                backgroundColor: getColor(v5, [338, 53, 62]),
                height: `${v5 * 2}px`,
                position: "relative",
                top: `${(100 - v5) * 2}px`,
              }}
            ></div>
          </div>
          <div className="grid grid-cols-5 gap-3 text-xs">
            <span className="text-center font-bold">Public Transport.</span>
            <span className="text-center font-bold">Energy Efficiency</span>
            <span className="text-center font-bold">Fuel Consumption</span>
            <span className="text-center font-bold">Sustainable Shopping</span>
            <span className="text-center font-bold">Residential AP</span>
          </div>
        </div>
      </div>
      <div className="fixed bottom-16 my-4 w-80 p-4 rounded-xl bg-[#79B859] justify-center items-center">
        <Link
          className="text-lg flex justify-center items-center text-[#484D6D]"
          to="/carbon_calculator"
        >
          Carbon Footprint Quiz
        </Link>
      </div>
    </div>
  );
};

export default Stats;
