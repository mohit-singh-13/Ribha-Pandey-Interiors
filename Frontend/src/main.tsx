import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App, { RenderedApp } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage.tsx";
import Error from "./components/Error.tsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RenderedApp />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
);
