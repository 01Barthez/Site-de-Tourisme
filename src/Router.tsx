import { createBrowserRouter, Outlet } from "react-router-dom"
import { createPortal } from 'react-dom';
import PageError from "./pages/errors/PageError";
import Home1 from "./pages/home/Home1";
import Home2 from "./pages/home/Home2";
import Home3 from "./pages/home/Home3";
import Navbar from "./components/custom/navbar/Navbar";
import Footer from "./components/custom/footer/Footer";
import ParamsBtn from "./components/custom/portail/ParamsBtn";

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
                    {/* <Footer /> */}
                    
                    
                    {/* Portail pour le settings */}
                    <div className="hidden lg:block">
                        {
                            createPortal(
                                <ParamsBtn />,
                                document.body
                            )
                        }
                    </div>

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