import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="lg:mx-4 mt-8 w-screen flex justify-center">
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
          onClick={() => {
            Cookies.set("userToken", "someToken");
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
        <div className="">
          <button className="text-blue-600 border-blue-600 border-b">
            forgot password?
          </button>
        </div>

        <div className="flex flex-col justify-center items-center pt-2">
          <p>Sign up partners</p>
          <div className="flex flex-wrap justify-center space-x-5 m-5 p-5">
            <div>
              <div className="flex mb-8 items-center justify-center md:columns-3 md:block">
                <button className="p-4 mx-6 border">
                  <img
                    src="/images/samsung.png"
                    className="w-8 h-8"
                    alt="Samsung fitness sign in"
                  />
                </button>
                {/* <button className="p-4 mx-6 border">
                  <img
                    src="/images/google_health.png"
                    className="w-8 h-8"
                    alt="Google fit sign in"
                  />
                </button> */}
                <button className="p-4 mx-6 border">
                  <img
                    src="/images/apple.png"
                    className="w-8 h-8"
                    alt="Apple sign in"
                  />
                </button>
              </div>
              <div className="flex items-center justify-center md:columns-3 md:block">
                <button className="p-4 mx-6 border">
                  <img
                    src="/images/google.png"
                    className="w-8 h-8"
                    alt="Google sign in"
                  />
                </button>
                <button className="p-4 mx-6 border">
                  <img
                    src="/images/presto.png"
                    className=" w-8 h-8"
                    alt="Presto sign in"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
