import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

const router = createBrowserRouter([
  { path: "/", Component: Homepage },
  { path: "/aboutpage", Component: AboutPage },
  { path: "/contactpage", Component: ContactPage },
  { path: "*", Component: ErrorPage },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
