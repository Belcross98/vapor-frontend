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
      <div className="navigation-profile" onClick={toggleShowProfile}>
        <img
          className={
            isLoggedIn
              ? "w-10"
              : "navigation-profile-icon navigation-profile-icon-loggedin"
          }
          src={userIcon}
        />
        {showProfile ? (
          <div className="navigation-profile-container w-4">
            <img className="navigation-profile-icon" src={userIcon} />
            {localStorage.getItem("username") ?? "Guest"}
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
