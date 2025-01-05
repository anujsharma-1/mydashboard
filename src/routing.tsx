import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./LoginModule/LoginPage"; // Adjust the path as necessary
import { HomeDashboard } from "./HomeModule/Home";

// Create the router with defined routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />, // Proper JSX syntax
  },  
  {
    path: "/home",
    element: <HomeDashboard />, // Proper JSX syntax
  },
]);

// Define the Routing component
const Routing = () => {
  return <RouterProvider router={router} />; // Proper JSX syntax
};

export default Routing;
