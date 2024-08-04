const data = [
  {
    id: 1,
    activity: "Took a train to Toronto on August 4th,",
    points: "18",
  },
  {
    id: 2,
    activity: "Ran 6.7 km on August 1st,",
    points: "7",
  },
  {
    id: 3,
    activity: "Auto-loaded your Presto Card for $100,",
    points: "42",
  },
];
const MostRecentActivity = () => {
  return (
    <>
      <h1 className="text-xl font-bold text-center bg-slate-200 w-full">Most Recent Activity</h1>
      {data.map((activity, idx) => {
        return (
          <div key={idx} className="flex flex-col">
            <span>{idx+1}. {activity.activity}</span>
            <span className="pb-2">You have earned {activity.points} points!</span>
          </div>
        );
      })}
    </>
  );
};

export default MostRecentActivity;
