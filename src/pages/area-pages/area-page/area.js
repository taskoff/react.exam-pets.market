import React from "react";
import Header from "../../../components/header/header";
import Title from "../../../components/title/title";
import AreaMenu from "../../../components/menus/area-menu/area-menu";

const PrivateArea = ()=>{
    return (
        <div>
        <Header />
        <AreaMenu type='area-menu'/>
        <Title title="Private Area!"/>
        

        </div>
    )
}

export default PrivateArea;