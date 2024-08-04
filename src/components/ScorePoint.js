const ScorePoint = (prop) => {
  return (
    <div className="flex flex-wrap justify-center space-x-5 border-2 rounded-lg m-5 p-5">
      <div className="flex flex-col">
        <p>Points</p>
        <p>{prop.score ? prop.score : "0"}</p>
      </div>
      <div className="flex flex-col">
        <p>Plants</p>
        <p>{prop.point ? prop.point : "0"}</p>
      </div>
    </div>
  );
};

export default ScorePoint;
