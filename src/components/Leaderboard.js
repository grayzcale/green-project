const Leaderboard = () => {
  return (
    <div className="flex my-4 flex-col justify-center items-center">
      <h1 className="text-lg">Leaderboard</h1>
      <div className="flex flex-col  justify-center mx-5 px-5 w-full">
        <div className="flex text-white font-bold bg-[#76cdda]  px-4 my-1 rounded-2xl  py-2">1. Winter</div>
        <div className="flex text-[#ffffff] font-bold bg-[#61b3bf] my-1 px-4 py-2 rounded-2xl ">2. Bread</div>
        <div className="flex text-white font-bold bg-[#44979d] my-1 px-4 rounded-2xl  py-2">3. Tennor</div>
        <div className="flex text-[#ffffff] font-bold py-2 rounded-2xl my-1 px-4 bg-[#337e8b] ">4. Bon Voyage</div>
        <div className="flex text-white font-bold bg-[#21627c] my-1 px-4 rounded-2xl py-2">5. John</div>
      </div>
    </div>
  );
};

export default Leaderboard;
