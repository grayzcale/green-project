const HomeTable = () => {
  return (
    <div className="pb-20">
      <div className="w-full">
        <table className="w-full">
          <caption className="p-3 font-bold text-lg">Recent Activity</caption>
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left text-xs p-2">Activity</th>
              <th className="text-center text-xs p-2" style={{ width: "30%" }}>
                Points Earned
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="bg-slate-200" style={{ backgroundColor: "#bfdba7" }}>
              <td className="text-left p-2">
                Took a train to Toronto on August 4th
              </td>
              <td className="text-center p-2">32</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="text-left p-2">Ran 6.7 km on August 1st</td>
              <td className="text-center p-2">7</td>
            </tr>
            <tr className="bg-slate-200" style={{ backgroundColor: "#bfdba7" }}>
              <td className="text-left p-2">
                Auto-loaded your Presto Card for $100
              </td>
              <td className="text-center p-2">42</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="text-left p-2">...</td>
              <td className="text-center p-2">...</td>
            </tr>
            <tr className="bg-slate-200" style={{ backgroundColor: "#bfdba7" }}>
              <td className="text-left p-2">...</td>
              <td className="text-center p-2">...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default HomeTable;
