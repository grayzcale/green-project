import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="lg:mx-4 w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img src="/images/logo_single.png" alt="logo" className="mt-4" />
        <form
          className="flex flex-col w-full mx-6 px-4 lg:mx-0 lg:w-1/3 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="space-y-2 flex flex-col justify-center items-center">
            <input
              name="email"
              placeholder="Email"
              className="p-4 mb-3 bg-[#DFEBBD] rounded-xl text-[#79B859] w-80"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2 flex flex-col justify-center items-center">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="p-3 mb-4 bg-[#DFEBBD] rounded-xl text-[#79B859] w-80"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              className={`text-[#0A6EA666] w-1/2 mb-4 font-bold border border-[#0A6EA666]  focus:ring-0 focus:outline-none rounded-xl text-sm px-5 py-2.5 text-center`}
              onClick={() => {
                Cookies.set("userToken", "someToken");
                navigate("/");
              }}
            >
              Login
            </button>
            <button className="text-[#3FBDF3] border-[#3FBDF3] border-b">
              Forgot password?
            </button>
          </div>
          

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-wrap justify-center space-x-5 m-3 p-5">
              <div>
                <div className="flex mb-8 items-center justify-center md:columns-3 md:block">
                  <button className="p-4 mx-6 border">
                    <img
                      src="/images/samsung.png"
                      className="w-8 h-8"
                      alt="Samsung fitness sign in"
                    />
                  </button>
                  <button className="p-4 mx-6 border">
                  <img
                    src="/images/google_health.png"
                    className="w-8 h-8"
                    alt="Google fit sign in"
                  />
                </button>
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
    </div>
  );
};

export default Login;
