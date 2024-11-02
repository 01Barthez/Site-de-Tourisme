import React, { useEffect, useState } from 'react'

const ScrollProgressBar: React.FC = () => {
    const [progressBar, setProgressBar] = useState<number>(0);

    const handleSroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollPoistion = 0;

        if(windowHeight > 999)
            scrollPoistion = (scrollPosition / windowHeight) * 100;

        setProgressBar(scrollPoistion);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleSroll);

        return () => {
            window.removeEventListener("scroll", handleSroll);
        };
    }, []);

    return (
        <div
            className={`absolute bottom-0 left-0 h-1 transition-all ease-linear duration-300 bg-gradient-to-tr from-primary/40 to-primary rounded-full`}
            style={{ width: `${progressBar}%` }}
        >
        </div>
    )
}

export default ScrollProgressBar
