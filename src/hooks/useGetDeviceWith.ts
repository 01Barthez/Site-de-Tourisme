import { useState, useEffect } from "react";

const useDeviceWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Écoute les changements de taille de l'écran
    window.addEventListener("resize", handleResize);

    // Nettoie l'événement lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default useDeviceWidth;

