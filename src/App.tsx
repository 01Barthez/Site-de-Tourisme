import React, { useEffect } from 'react'
import { ThemeProvider } from './hooks/useTheme'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider } from 'react-router-dom';
import Router from './Router';
import { Toaster } from './components/ui/toaster';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 700,
      easing: 'ease',
      delay: 100,
    });

    AOS.refresh();
  }, [])

  return (
    <ThemeProvider defaultTheme='light' storageKey="vite-ui-theme">
      <RouterProvider router={Router} />
      <Toaster />
    </ThemeProvider>
  )
}

export default App