import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./Contact.js"
import Error from "./Error.js";
import Body from "./Body.js";
import AboutUs from "./AboutUs.js";

const App = () => {
   return (
      <div>
         <Header />
         <Outlet />
      </div>
   );
};

const AppRoutes = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Body />
         },
         {
            path: "/about",
            element: <AboutUs />
         },
         {
            path: "/contact",
            element: <Contact />
         }
      ],
      errorElement: <Error />
   },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRoutes} />);