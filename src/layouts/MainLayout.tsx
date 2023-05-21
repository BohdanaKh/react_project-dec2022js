import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {useAppSelector} from "../hooks";



const MainLayout: FC = () => {
    const {darkMode} = useAppSelector(state => state.themeReducer);



    return (
        <div className={darkMode?'App-light':'App-dark'}>

            <Header/>

            <Outlet/>
        </div>
    );
};

export {MainLayout};

