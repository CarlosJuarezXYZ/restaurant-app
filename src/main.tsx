import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import { RestaurantProvider } from "./context/RestaurantContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
    </ThemeProvider>
  </StrictMode>
);
