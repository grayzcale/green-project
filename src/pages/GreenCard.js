const GreenCard = () => {
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <div className="bg-slate-300 p-3 w-52 rounded-2xl text-center">
        <span className="text-sm">Carbon Footprint Rating: 300</span>
        <span className="block text-gray-800 text-2xl font-bold">10% Cashback</span>
      </div>
      <img
        src="images/greencard.jpg"
        className="my-4 w-64 h-64"
        alt="green card"
      />
      <div className="flex">
        <span className="">Member since: 2022</span>
      </div>
      <span className="font-bold text-lg">4444 1234 9182 23</span>
    </div>
  );
};

export default GreenCard;
