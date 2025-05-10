import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Home } from "./Pages/Home.jsx";
import { TicketSelection } from "./Pages/TicketSelection.jsx";
import InfoPage from "./Pages/Info.jsx";
import Applications from "./Pages/Applications.jsx";
import Gallery from "./Pages/Gallery.jsx";
import More from "./Pages/More.jsx";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
