import SearchManga from "./SearchManga";
import menuIcon from "./../assets/images/menuForNav.png";
import { useContext } from "react";
import { globalContext } from "../context/context";

import NavigationProfile from "./NavigationProfile";

function SearchbarAndProfile() {
  const { navigationShow, setNavigationShow } = useContext(globalContext);

  function expandNav() {
    setNavigationShow(true);
  }
  return (
    <>
      <div className="bg-gray-800 fixed z-40 w-full flex justify-between items-center">
        {navigationShow ? (
          <div></div>
        ) : (
          <img onClick={expandNav} className="w-4" src={menuIcon} />
        )}

        <div className="flex gap-8 items-center">
          <SearchManga />
          <NavigationProfile />
        </div>
      </div>
    </>
  );
}

export default SearchbarAndProfile;
