import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../services/MangaApi";
import { globalContext } from "../context/context";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigator = useNavigate();
  const { setIsLoggedIn } = useContext(globalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success, errorText, data } = await logIn({ username, password });
    if (!success) {
      setErrorMessage(errorText);
    } else {
      setIsLoggedIn(true);
      navigator("/");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Login to MangaLib
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-300 mb-1">Username</label>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="Username"
              className="w-full rounded-lg bg-gray-700 text-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg bg-gray-700 text-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg py-3 text-white font-semibold shadow-md"
          >
            Login
          </button>

          {/* Extra */}
          <p className="text-center text-gray-400 text-sm mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => navigator("/Register")}
              className="text-indigo-400 hover:underline cursor-pointer"
            >
              Register
            </span>
          </p>
          {errorMessage && (
            <div className="fixed   text-red-600 px-6 py-3 rounded-xl shadow-lg z-50 animate-bounce">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
