import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";
import Approutes from "./Approutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Approutes />
    </Router>
  </StrictMode>
);
