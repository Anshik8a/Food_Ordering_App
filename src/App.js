import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
          <Header/>
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
    )
}
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [  
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
    ],
    errorElement: <Error/>
  },
])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);