import { createRoot } from "react-dom/client";
import "./styles/Global.css";
import App from "./App";
import GlobalContext from "./context/context";

createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <App />
  </GlobalContext>,
);
