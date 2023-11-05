import React from "react";
import ReactDOM from "react-dom/client";
import "@mf-kahve/ui/assets/global.css";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@mf-kahve/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
