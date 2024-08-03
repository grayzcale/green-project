import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <div className="flex flex-col my-4 justify-center space-x-5 border-2 rounded-lg m-5 p-5">
      <h2 className="text-lg my-2">Settings</h2>
      <Link to="/delete_account" className="border p-2 my-2 text-red-500">
      Delete Account</Link>
    </div>
  );
};

export default Setting;
