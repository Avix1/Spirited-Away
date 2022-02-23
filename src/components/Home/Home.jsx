import React from "react";
import HomePage from "./HomeStyles";
import Header from "../Header/Header";
import MainSection from '../Main/Main';

const Home = () => {
    return (
        <>
            <HomePage>
                <Header />
                <MainSection />
            </HomePage>
        </>
    );
};

export default Home;
