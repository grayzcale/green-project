import "../assets/inner_shadow.css";

const Legend = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-5 m-5 px-5 py-2 bg-[#9FDEEB] rounded-2xl">
      <div>
        <div className="flex items-center my-1 justify-center columns-4 md:block">
          <div className="flex flex-col mx-2 items-center justify-center">
            <div className="bg-[#cb3838] p-3 mx-3 rounded-full is"></div>
            <p className="text-xs rounded-full">Unhealthy</p>
          </div>
          <div className="flex flex-col mx-2 items-center justify-center">
            <div className="bg-[#FF9900] p-3 mx-3 rounded-full is"></div>
            <p className="text-xs">Sensitive</p>
          </div>
          <div className="flex flex-col mx-2 items-center justify-center">
            <div className="bg-[#FEE400] p-3 mx-3 rounded-full is"></div>
            <p className="text-xs">Moderate</p>
          </div>
          <div className="flex flex-col mx-2 items-center justify-center">
            <div className="bg-[#22C514] p-3 mx-3 rounded-full is"></div>
            <p className="text-xs">Healthy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
