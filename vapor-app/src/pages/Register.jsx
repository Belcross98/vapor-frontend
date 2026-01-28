import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/MangaApi";
import { globalContext } from "../context/context";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setIsLoggedIn } = useContext(globalContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, errorText, data } = await registerUser(
      email,
      username,
      password,
    );
    if (success) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setErrorMessage(errorText);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="yourmail@gmail.com"
              className="w-full rounded-lg bg-gray-700 text-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
