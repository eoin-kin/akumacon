import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import {Home} from "./Pages/Home.jsx";
import {About} from "./Pages/About.jsx";
import {TicketSelection} from "./Pages/TicketSelection.jsx";

//Configure router to run when pages finished

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    { path: "/about", element: <About /> },
    { path: "/ticketselection", element: <TicketSelection /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
