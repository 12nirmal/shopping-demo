import React from "react";
import { useRoutes } from "react-router-dom";
import AuthGuard from "./guard/AuthGuard";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Header from "./Layouts/Header";
import GuestGuard from "./guard/GuestGuard";
import Abouts from "./pages/Abouts";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import Singlepage from "./pages/Singlepage";
import Cart from "./pages/Cart";
// import Payment from "./pages/payment";

function Router() {
  let element = useRoutes([
    {
      path: "/login",
      element: (
        <>
          <Header />
          <GuestGuard>
            <Login />
          </GuestGuard>
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <Header />
          <AuthGuard>
            <HomePage />
          </AuthGuard>
        </>
      ),
    },
    { path: "/", element: <React.Fragment>HomePage</React.Fragment> },
    { path: "*", element: <React.Fragment>404</React.Fragment> },
    // {
    //   path: "Payments",
    //   element: (
    //     <>
    //       <Header /> <Payment />
    //     </>
    //   ),
    // },
    {
      path: "/cart",
      element: (
        <>
          <Header />
          <Cart />
        </>
      ),
    },
    {
      path: "/listing-details/:id",
      element: (
        <>
          <Header />
          <Singlepage />
        </>
      ),
    },

    {
      path: "/product",
      element: (
        <>
          <Header />
          <Products />
        </>
      ),
    },
    {
      path: "/abouts",
      element: (
        <>
          <Header />
          <Abouts />
        </>
      ),
    },
    {
      path: "/contectus",
      element: (
        <>
          <Header />
          <ContactUs />
        </>
      ),
    },
  ]);

  return element;
}

export default Router;
