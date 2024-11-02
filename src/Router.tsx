import { createBrowserRouter, Outlet } from "react-router-dom"
import PageError from "./pages/errors/PageError";
import Home1 from "./pages/home/Home1";
import Home2 from "./pages/home/Home2";
import Home3 from "./pages/home/Home3";
import Footer from "./components/custom/footer/Footer";
import ParamsBtn from "./components/custom/portail/ParamsBtn";
import ForgotPwd from "./pages/auth/ForgotPwd";
import Navbar from "./components/custom/navbar/Navbar";
import Stay from "./pages/Stay";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ScrollToTop from "./components/custom/ScrollToTop";


/**
 * Creates a router with specified routes and elements for each route.
 * @param {Array} routes - An array of route objects containing path and element information.
 * @returns None
 */

const Router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Outlet />
            
            {/* To scroll to top each time that we change routes */}
            <ScrollToTop />

            {/* Portail pour le settings */}
            <ParamsBtn />,
        </>,

        // Page erreur
        errorElement: <>
            <PageError />
        </>,

        children: [
            // Managing Home pages
            {
                path: '',
                element: <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </>,

                children: [
                    // First Home page
                    {
                        path: '',
                        element: <>
                            <Home1 />
                        </>
                    },

                    // Second Home page
                    {
                        path: 'home-2/',
                        element: <>
                            <Home2 />
                        </>
                    },

                    // First Home page
                    {
                        path: 'home-3/',
                        element: <>
                            <Home3 />
                        </>
                    },

                    // First Home page
                    {
                        path: 'stay/',
                        element: <>
                            <Stay />
                        </>
                    },
                ]
            },

            // Managing Authentifications pages
            {
                path: '',
                element: <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </>,
                children: [
                    // First Home page
                    {
                        path: 'login/',
                        element: <>
                            <Login />
                        </>
                    },

                    // Second Home page
                    {
                        path: 'signup/',
                        element: <>
                            <SignUp />
                        </>
                    },

                    // First Home page
                    {
                        path: 'forgot-pwd/',
                        element: <>
                            <ForgotPwd />
                        </>
                    },
                ]
            },
        ]
    },
])

export default Router;