import userIcon from "./../assets/images/userIcon.png";
import LinkButton from "./LinkButton";
import LogOut from "./LogOut";
import { useState } from "react";
import { useContext, useRef } from "react";
import { globalContext } from "../context/context";

function NavigationProfile() {
  const [showProfile, setShowProfile] = useState(false);

  const { isLoggedIn } = useContext(globalContext);

  function toggleShowProfile() {
    setShowProfile((prev) => !prev);
  }
  return (
    <>
      <div className="pl-2" onClick={toggleShowProfile}>
        <img className={isLoggedIn ? "w-10" : "w-10"} src={userIcon} />
        {showProfile ? (
          <div className="flex flex-col justify-center items-center absolute right-4 top-full mt-2 bg-gray-700 rounded-lg shadow-lg w-40">
            {
              <div className="">
                {localStorage.getItem("username") ?? "Guest"}
              </div>
            }
            <LinkButton route={"/Register"} linkInnerText={"Register"} />
            {isLoggedIn ? (
              <LogOut />
            ) : (
              <LinkButton route={"/Login"} linkInnerText={"Login"} />
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default NavigationProfile;
