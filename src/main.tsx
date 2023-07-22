import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index.tsx";
import MainLayout from "./PageLayouts/MainLayout.tsx";
import "./main.css";
import Experimental from "./pages/Experimental.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <Index />,
                    },
                ],
            },
            {
                path: "experimental",
                element: <Experimental />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
