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
    <div className="bg-gray-800 fixed z-40 w-full flex justify-between items-center px-4">
      <div className="flex items-center gap-3">
        {!navigationShow && (
          <>
            <img
              onClick={expandNav}
              className="w-4 cursor-pointer"
              src={menuIcon}
            />

            <h1 className="text-gray-100 text-2xl font-bold">MangaLib</h1>
          </>
        )}
      </div>

      <div className="flex gap-8 items-center">
        <SearchManga />
        <NavigationProfile />
      </div>
    </div>
  );
}

export default SearchbarAndProfile;
