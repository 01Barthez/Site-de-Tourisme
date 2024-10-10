import { createBrowserRouter, Outlet } from "react-router-dom"
import PageError from "./pages/errors/PageError";
import Home1 from "./pages/home/Home1";
import Home2 from "./pages/home/Home2";
import Home3 from "./pages/home/Home3";
import Navbar from "./components/custom/navbar/Navbar";
import Footer from "./components/custom/footer/Footer";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Outlet />
        </>
        ,
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
                ]
            },
        ]


    },
])

export default Router;