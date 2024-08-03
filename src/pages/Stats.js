import { useState } from 'react';
import ScorePoint from "../components/ScorePoint";
import "../assets/hc.css";

const Stats = () => {

	const [graphRange, setGraphRange] = useState("monthly");
	const ranges = ["monthly", "daily", "yearly"];
	const changeGraphRangeR = (event, dir) => {
		const currIndex = ranges.indexOf(graphRange)
		let newIndex = 0
		if (dir === 1) {
			newIndex = currIndex === ranges.length - 1 ? 0 : currIndex + 1;
		} else if (dir === -1) {
			newIndex = currIndex === 0 ? ranges.length - 1 : currIndex - 1;
		}
		setGraphRange(ranges[newIndex]);
	}

	return (
		<div>
			<ScorePoint />
			<div className="flex flex-wrap justify-center space-x-5 border-2 rounded-lg m-5 p-5">
				<div className='hc'>
				</div>
			</div>
			<div className="flex flex-wrap justify-center space-x-5 border-2 rounded-lg m-5 p-5">
				<div className="">
					<div className='grid grid-cols-3'>
						<button onClick={(event) => changeGraphRangeR(event, -1)}>
							<img className='size-5 mx-auto' src="images/left-arrow.png" alt="left arrow"/>
						</button>
						<span className='block w-full text-center italic'>{graphRange.charAt(0).toUpperCase() + graphRange.slice(1)}</span>
						<button onClick={(event) => changeGraphRangeR(event, 1)}>
							<img className='size-5 mx-auto' src="images/right-arrow.png" alt="right arrow"/>
						</button>
					</div>
					{graphRange === "monthly" && (
						<select className='block text-center mx-auto rounded-lg my-2 p-1'>
							<option>January</option>
							<option>February</option>
							<option>March</option>
							<option>...</option>
						</select>
					)}
					{graphRange === "daily" && (
						<select className='block text-center mx-auto rounded-lg my-2 p-1'>
							<option>Jan 1st</option>
							<option>Jan 2nd</option>
							<option>Jan 3rd</option>
							<option>...</option>
						</select>
					)}
					{graphRange === "yearly" && (
						<select className='block text-center mx-auto rounded-lg my-2 p-1'>
							<option>2024</option>
							<option>2023</option>
							<option>2022</option>
							<option>...</option>
						</select>
					)}
					<img src="/images/placeholder_chart.png" alt="graph result"/>
					<div className="grid px-2 grid-cols-4 grid-rows-1 text-xs">
						<span className="text-center font-bold">
							Public Transportation
						</span>
						<span className="text-center font-bold">
							Energy Efficiency
						</span>
						<span className="text-center font-bold">
							Fuel Consumption
						</span>
						<span className="text-center font-bold">
							Sustainable Shopping
						</span>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default Stats;
