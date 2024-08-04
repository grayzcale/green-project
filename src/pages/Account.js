const Account = () => {
  return (
    <div className="flex flex-col my-4 justify-center space-x-5 border-2 rounded-lg m-5 p-5">
      <h2 className="text-lg">Account</h2>
      <input type="text" placeholder="email" className="border my-2 p-2"/>
      <input type="text" placeholder="password" className="border my-2 p-2"/>
      <button className="border p-2 my-2">Save changes</button>
      <button className="border p-2 my-2 text-white bg-red-500">Lock card</button>
    </div>
  );
};

export default Account;