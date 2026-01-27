import { useContext } from "react";
import { globalContext } from "./context/context";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/NavBar.jsx";
import SearchbarAndProfile from "./components/SearchbarAndProfile.jsx";

import HomePage from "./pages/HomePage.jsx";
import Manga from "./pages/MangaPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Register from "./pages/Register.jsx";
import NotFoudPage from "./pages/NotFoundPage.jsx";

function App() {
  const { navigationShow } = useContext(globalContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex min-h-screen bg-gray-900">
          <Navbar />
          <div className="flex-1 transition-all duration-300">
            <SearchbarAndProfile />
            <Outlet />
          </div>
        </div>
      ),
      children: [
        { path: "/", element: <HomePage /> },
        { path: "*", element: <NotFoudPage /> },
        { path: "/Manga/:id", element: <Manga /> },
        { path: "/About", element: <AboutPage /> },
        { path: "/Login", element: <LoginPage /> },
        { path: "/Register", element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
