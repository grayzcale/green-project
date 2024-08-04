const Leaderboard = () => {
  return (
    <div className="flex my-4 flex-col justify-center items-center">
      <h1 className="text-lg">Leaderboard</h1>
      <div className="flex flex-col  justify-center mx-5 px-5 w-full">
        <div className="flex bg-[#79B859] text-white font-bold px-4 my-1 rounded-2xl  py-2">1. +1000 Aura</div>
        <div className="flex text-[#8D66AC] font-bold bg-[#9FDEE8] my-1 px-4 py-2 rounded-2xl ">2. Eurka</div>
        <div className="flex text-white font-bold bg-[#79B859] my-1 px-4 rounded-2xl  py-2">3. Tenison</div>
        <div className="flex text-[#8D66AC] font-bold py-2 rounded-2xl my-1 px-4 bg-[#9FDEE8] ">4. Vonya</div>
        <div className="flex text-white font-bold bg-[#79B859] my-1 px-4 rounded-2xl py-2">5. Migaueyla</div>
      </div>
    </div>
  );
};

export default Leaderboard;
