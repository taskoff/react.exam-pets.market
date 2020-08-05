import React from "react";
import Header from "../../../components/header/header";
import Title from "../../../components/title/title";
import styles from './home.module.css';
import SecondMenu from "../../../components/menus/second-menu/second-menu";

const HomePage = ()=>{
    return (
        <div>
        <Header />
        <SecondMenu type="home-menu"/>
        <Title title="Choose Category!"/>

        </div>
    )
}

export default HomePage;