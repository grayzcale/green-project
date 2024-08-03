import "../assets/inner_shadow.css";

const Legend = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-5 m-5 px-5 py-2 bg-[#9FDEEB] rounded-2xl">
      <div>
        <div className="flex items-center my-1 justify-center md:columns-3 md:block">
          <h1 className="text-base font-bold">Legend</h1>
          <div className="flex">
            <div className="bg-[#cb3838] p-3 mx-3 rounded-full is"></div>
            <p className="text-xs rounded-full">Unhealthy</p>
          </div>
          <div className="flex">
            <div className="bg-[#FEE400] p-3 mx-3 rounded-full is"></div>
            <p className="text-xs">Moderate</p>
          </div>
        </div>
        <div className="flex items-center justify-center md:columns-3 md:block">
          <div className="flex">
            <div className="bg-[#FF9900] p-3 mx-3 rounded-full is"></div>
            <p className="text-xs">Unhealthy Sensitive</p>
          </div>
          <div className="flex">
            <div className="bg-[#22C514] p-3 mx-3 rounded-full is"></div>
            <p className="text-xs">Healthy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
