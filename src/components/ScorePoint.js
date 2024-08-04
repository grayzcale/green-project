const ScorePoint = (prop) => {
  return (
    <div className="flex justify-center space-x-5  m-5 p-5">
      <div className="border-2 rounded-lg">
        <div className="flex flex-col p-5 bg-[#80d2b4]">
          <p>Points</p>
          <p>{prop.score ? prop.score : "0"}</p>
        </div>
      </div>
      <div className="border-2 rounded-lg">
        <div className="flex flex-col p-5 bg-[#8dc84a]">
          <p>Plants</p>
          <p>{prop.point ? prop.point : "0"}</p>
        </div>
      </div>
    </div>
  );
};

export default ScorePoint;
