import { useState } from "react";
import "../assets/hc.css";
import { Link } from "react-router-dom";
import Tips from "../components/Tips";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../assets/tiny_text.css";

import { useSpring, animated } from 'react-spring';

const Stats = () => {
  const randomInt = () => Math.floor(Math.random() * 100) + 1;
  const getRandomList = () => {
    const list = [];
    for (let i = 0; i < 5; i++) {
      list.push(randomInt());
    }
    return list;
  }

  const [values, setValues] = useState(getRandomList());
  const [cval, setCVal] = useState(Math.ceil(values.reduce((acc, val) => acc + val, 0) / 5));

  const v1 = useSpring({
    height: `${values[0] * 2}px`,
    top: `${(100 - values[0]) * 2}px`,
    config: { tension: 170, friction: 26 },
  })

  const v2 = useSpring({
    height: `${values[1] * 2}px`,
    top: `${(100 - values[1]) * 2}px`,
    config: { tension: 170, friction: 26 },
  })

  const v3 = useSpring({
    height: `${values[2] * 2}px`,
    top: `${(100 - values[2]) * 2}px`,
    config: { tension: 170, friction: 26 },
  })

  const v4 = useSpring({
    height: `${values[3] * 2}px`,
    top: `${(100 - values[3]) * 2}px`,
    config: { tension: 170, friction: 26 },
  })

  const v5 = useSpring({
    height: `${values[4] * 2}px`,
    top: `${(100 - values[4]) * 2}px`,
    config: { tension: 170, friction: 26 },
  })

  const resetCVal = () => {
    const list = getRandomList();
    setValues(list);
    console.log(values);
    setCVal(Math.ceil(list.reduce((acc, val) => acc + val, 0) / 5));
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
    let r = mapRange(v, 0, 100, 255, 0);
    const g = mapRange(v, 0, 100, 0, 255);
    if (color) {
      // r = mapRange(v, 0, 100, 0, color[2]);
      return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;
    }
    return `rgb(${r}, ${g}, 0)`;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center border-2 rounded-lg m-2 p-10">
        <span className="pb-3 font-bold">EcoTrack Score</span>
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
      <div className="flex flex-wrap justify-center border-2 rounded-lg m-2 p-5">
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
            <animated.div
              className="block w-full rounded-lg"
              style={{
                ...v1,
                backgroundColor: getColor(values[0], [200, 64, 61]),
                position: "relative",
              }}
            >
              <span className="block text-center mx-auto w-full text-xs font-bold" style={{ position: "relative", bottom: "17px" }}>{values[0]}%</span>
            </animated.div>
            <animated.div
              className="block w-full rounded-lg"
              style={{
                ...v2,
                backgroundColor: getColor(values[1], [135, 53, 63]),
                position: "relative",
              }}
            >
              <span className="block text-center mx-auto w-full text-xs font-bold" style={{ position: "relative", bottom: "17px" }}>{values[1]}%</span>
            </animated.div>
            <animated.div
              className="block w-full rounded-lg"
              style={{
                ...v3,
                backgroundColor: getColor(values[2], [265, 46, 68]),
                position: "relative",
              }}
            >
              <span className="block text-center mx-auto w-full text-xs font-bold" style={{ position: "relative", bottom: "17px" }}>{values[2]}%</span>
            </animated.div>
            <animated.div
              className="block w-full rounded-lg"
              style={{
                ...v4,
                backgroundColor: getColor(values[3], [26, 64, 56]),
                position: "relative",
              }}
            >
              <span className="block text-center mx-auto w-full text-xs font-bold" style={{ position: "relative", bottom: "17px" }}>{values[3]}%</span>
            </animated.div>
            <animated.div
              className="block w-full rounded-lg"
              style={{
                ...v5,
                backgroundColor: getColor(values[4], [338, 53, 62]),
                position: "relative",
              }}
            >
              <span className="block text-center mx-auto w-full text-xs font-bold" style={{ position: "relative", bottom: "17px" }}>{values[4]}%</span>
            </animated.div>
          </div>
          <div className="grid grid-cols-5 gap-3 text-xs">
            <span className="text-center font-bold text-xxs">Public Transport</span>
            <span className="text-center text-xxs font-bold">Energy Efficiency</span>
            <span className="text-center text-xxs font-bold">Fuel Consumption</span>
            <span className="text-center text-xxs font-bold">Sustainable Shopping</span>
            <span className="text-center text-xxs font-bold">Residential AP</span>
          </div>
        </div>
      </div>
      <Tips
        tips={
          "Consider an electric or hybrid vehicle: These vehicles have lower emissions than conventional gasoline cars."
        }/>
      <div className="w-80 p-3 rounded-xl bg-[#79B859] justify-center items-center">
        <Link
          className="text-sm flex justify-center items-center font-bold text-white"
          to="/carbon_calculator"
        >
          Carbon Footprint Quiz
        </Link>
      </div>
    </div>
  );
};

export default Stats;
