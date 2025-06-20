import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home.jsx";
import { TicketSelection } from "./Pages/TicketSelection.jsx";
import InfoPage from "./Pages/Info.jsx";
import Applications from "./Pages/Applications.jsx";
import Gallery from "./Pages/Gallery.jsx";
import More from "./Pages/More.jsx";
import { useContent } from "./hooks/useContent.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/info", element: <InfoPage /> },
  { path: "/ticketselection", element: <TicketSelection /> },
  { path: "/applications", element: <Applications /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/more", element: <More /> },
]);

function ThemeProvider({ children }) {
  const { content: colors } = useContent("content/theme.json");
  useEffect(() => {
    if (colors) {
      const root = document.documentElement;
      Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
      });
    }
  }, [colors]);
  return children;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
