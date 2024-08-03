import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="lg:mx-4 mt-8 h-screen w-screen flex justify-center">
          <form
            className="flex flex-col w-full mx-6 lg:mx-0 lg:w-1/3 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              
            }}
          >
            <h2 className="text-xl font-semibold">Login</h2>
            <div className="space-y-2 flex flex-col justify-center items-start">
              <span className="text-sm">Email</span>
              <input
                name="email"
                placeholder="Email"
                className="p-2 border-b border-gray-700 bg-white w-full"
                value={username}
                onChange={(e) => setUsername({ email: e.target.value })}
              />
            </div>
            <div className="space-y-2 flex flex-col justify-center items-start">
              <span className="text-sm">Password</span>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="p-2 border-b border-gray-700 bg-white w-full"
                value={password}
                onChange={(e) => setPassword({ password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className={`text-white font-semibold bg-gray-700  focus:ring-0 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center`}
            //   onClick={async () => {
            //     let loginResult = await loginMutation({
            //       email: user.email,
            //       password: user.password,
            //     });
            //     if (loginResult?.data?.userLogin?.ok) {
            //       setUser(userState);
            //       Cookies.set("token", loginResult?.data?.userLogin?.token);
            //       navigate("/");
            //     } else {
            //       setMessage({
            //         message: "Something went wrong",
            //         error: true,
            //         confirmation: false,
            //       });
            //       setShowMessage(true);
            //     }
            //   }}
            //   disabled={user.email === "" || user.password === ""}
                onClick={()=>{
                    navigate("/");
                }}
            >
              Login
            </button>
            <Link
              to="/sign-up"
              className="text-gray-700 font-semibold bg-white hover:bg-gray-200 border border-gray-700 focus:ring-0 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Register
            </Link>
          </form>
        </div>
      );
  };
  
export default Login;