import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";
import Approutes from "./Approutes";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Auth0ProviderWithNavigate>
        <Approutes />
      </Auth0ProviderWithNavigate>
    </Router>
  </StrictMode>
);
