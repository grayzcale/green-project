const Legend = (props) => {
  return (
    <div className="flex flex-wrap justify-center space-x-5 m-5 px-5 py-2 bg-[#57A773] rounded-2xl">
      <div>
        <div className="flex items-center my-1 justify-center md:columns-3 md:block">
          <h1 className="text-base">Legend</h1>
          <div className="flex">
            <div className="bg-[#FF0000] p-1 mx-3"></div>
            <p className="text-[#484D6D] text-xs">Unhealthy</p>
          </div>
          <div className="flex">
            <div className="bg-[#FEE400] p-1 mx-3"></div>
            <p className="text-[#484D6D] text-xs">Moderate</p>
          </div>
        </div>
        <div className="flex items-center justify-center md:columns-3 md:block">
          <div className="flex">
            <div className="bg-[#FF9900] p-1 mx-3"></div>
            <p className="text-[#484D6D] text-xs">Unhealthy Sensitive</p>
          </div>
          <div className="flex">
            <div className="bg-[#22C514] p-1 mx-3"></div>
            <p className="text-[#484D6D] text-xs">Healthy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
