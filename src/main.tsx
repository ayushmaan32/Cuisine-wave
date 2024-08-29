import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";
import Approutes from "./Approutes";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigate>
          <Approutes />
        </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
