import Legend from "../components/Legend";
import Tips from "../components/Tips";
const AirQuality = () => {
  return (
    <div>
      <span className="py-2 text-center block mx-auto bg-orange-500 font-bold text-lg text-white shadow-md">
        SENSITIVE
      </span>
      <Legend />
      <div className="flex items-center justify-center mx-6">
        <iframe className="w-full" src="https://waqi.info/#/c/43.702/-79.372/9.8z" title="Air Quality Index" height="500px" scrolling="no"></iframe>
      </div>
      <Tips
        tips={
          "An air pollution map displays pollutant levels using color codes and markers, highlighting areas with poor air quality and tracking pollution sources and trends. These maps are essential for monitoring, public health, and policy-making."
        }/>
    </div>
  );
};

export default AirQuality;
