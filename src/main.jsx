import "./main.css";
import App from "./App.jsx";
import "./styles/fonts.css";
import { createRoot } from "react-dom/client";
import { scan } from "react-scan";

scan({
  enabled: true,
});

createRoot(document.getElementById("root")).render(<App />);
