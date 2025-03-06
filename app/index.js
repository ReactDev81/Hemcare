import React, { useState, useEffect } from "react";
import '../global.css';

// screens
import Splash from './splash';
import Welcome from './welcome';

const AppLayout = () => {

    const [isSplashVisible, setSplashVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSplashVisible(false);
        }, 2500); 

        return () => clearTimeout(timer);
    }, []);

    return (
        isSplashVisible ? <Splash /> : <Welcome />
    )
}

export default AppLayout;