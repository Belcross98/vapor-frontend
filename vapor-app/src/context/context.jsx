import { createContext, useEffect, useState } from "react";

export const globalContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (value) => {},
});

function GlobalContext({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navigationShow, setNavigationShow] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const username = localStorage.getItem("username");
    if (token && username) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <globalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        navigationShow,
        setNavigationShow,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export default GlobalContext;
