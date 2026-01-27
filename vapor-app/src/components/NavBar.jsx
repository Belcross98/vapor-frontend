import { useContext } from "react";
import { globalContext } from "../context/context";
import logo from "./../assets/images/logo.png";
import closeImage from "./../assets/images/close.png";
import LinkButton from "./LinkButton.jsx";

function Navbar() {
  const { isLoggedIn, navigationShow, setNavigationShow } =
    useContext(globalContext);

  function collapseNav() {
    setNavigationShow(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 z-50
        ${navigationShow ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Top: Logo + Close + Optional Search/Profile */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 min-h-16">
        <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        <div className="flex items-center space-x-2">
          <button
            onClick={collapseNav}
            className="focus:outline-none p-1 hover:bg-gray-800 rounded"
          >
            <img
              src={closeImage}
              alt="Close"
              className="h-6 w-6 object-contain"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-2 items-center flex-col py-4">
        <LinkButton route={"/"} linkInnerText={"Home"} />
        <LinkButton route={"/About"} linkInnerText={"About"} />
      </div>

      <div className="p-4 border-t border-gray-700 text-gray-400 text-sm">
        &#169; 2025. Vapor
      </div>
    </nav>
  );
}

export default Navbar;
