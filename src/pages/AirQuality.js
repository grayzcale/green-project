//import Leaderboard from "../components/Leaderboard";
import Legend from "../components/Legend";
// import Tips from "../components/Tips";
const AirQuality = () => {
  return (
    <div>
      {/* <Tips
        tips={
          "An air pollution map shows pollutant levels across regions using color codes and markers. It highlights areas with poor air quality, tracks pollution sources, and trends. These maps are vital for monitoring, public health, and policy-making."
        }
      /> */}
      <Legend />
      <div className="flex items-center justify-center mx-6">
        <iframe className="w-full" src="https://waqi.info/" title="Air Quality Index" height="500px" scrolling="no"></iframe>
      </div>
      {/* <Leaderboard /> */}
    </div>
  );
};

export default AirQuality;
