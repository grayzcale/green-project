const HomeTable = () => {
  return (
    <div className="mb-20">
      <div className="p-4 text-center">
        <span className="pb-4 font-bold text-lg mx-auto">Recent Activity</span>
        <div className="bg-gray-100 p-2 mt-2 px-4 grid grid-cols-2 rounded-lg shadow-md">
          <span className="inline-block text-left border-r-black">Activity</span>
          <span className="inline-block text-right border-l-2 border-l-gray-300">Points Earned</span>
        </div>

        <div className="bg-indigo-50 p-2 px-5 my-2 grid grid-cols-2 rounded-lg text-sm font-semibold shadow-md">
          <span className="inline-block text-left border-r-black">Took a train to Toronto on August 4th</span>
          <span className="inline-block text-right">18</span>
        </div>

        <div className="bg-gray-100 p-2 px-5 my-2 grid grid-cols-2 rounded-lg text-sm font-semibold shadow-md">
          <span className="inline-block text-left border-r-black">Ran 6.7 km on August 1st</span>
          <span className="inline-block text-right">7</span>
        </div>

        <div className="bg-indigo-50 p-2 px-5 my-2 grid grid-cols-2 rounded-lg text-sm font-semibold shadow-md">
          <span className="inline-block text-left border-r-black">Auto-loaded your Presto Card for $100</span>
          <span className="inline-block text-right">42</span>
        </div>

        <div className="bg-indigo-50 p-2 px-5 my-2 grid grid-cols-2 rounded-lg text-sm font-semibold shadow-md">
          <span className="inline-block text-left border-r-black">...</span>
          <span className="inline-block text-right ">...</span>
        </div>
        <span className="inline-block text-right "><span className="border-b text-blue-400 border-b-blue-400">Show more</span></span>
      </div>
    </div>
  );
};
export default HomeTable;