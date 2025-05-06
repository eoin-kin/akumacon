import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Home } from "./Pages/Home.jsx";
import { TicketSelection } from "./Pages/TicketSelection.jsx";
import { Guests } from "./Pages/Guests.jsx";
import InfoPage from "./Pages/Info.jsx";

//Configure router to run when pages finished

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/info", element: <InfoPage /> },
  { path: "/ticketselection", element: <TicketSelection /> },
  { path: "/guests", element: <Guests /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
