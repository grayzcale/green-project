const GreenCard = () => {
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <div className="bg-slate-300 p-3 w-52 rounded-2xl text-center">
        <span className="text-sm">EcoTrack Score: 82%</span>
        <span className="block text-gray-800 text-2xl font-bold">
          2x Points
        </span>
      </div>
      <img src="/images/logo_single.png" alt="logo" />
      <img
        src="images/barcode.png"
        className="my-4 w-64 h-20"
        alt="green card"
      />
      <div className="flex">
        <span className="">Member since: 2024</span>
      </div>
      <span className="font-bold text-lg">4444 1234 9182 23</span>
    </div>
  );
};

export default GreenCard;
