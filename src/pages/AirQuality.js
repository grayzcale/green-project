import Legend from "../components/Legend";
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
    </div>
  );
};

export default AirQuality;
