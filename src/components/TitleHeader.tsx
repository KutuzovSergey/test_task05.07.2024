import React, { FC } from "react";
import TitleH1 from "./UI/TitleH1/TitleH1";

import '../styles/componentStyles/TitleHeader.scss';


const TitleHeader:FC = () =>{

    return (
        <div className="title-header">    
            <TitleH1 
                text='Do you want to Learn more About cryptocurrencies ' 
                decorativeText='quickly and easily ?' />
        </div>
    )
}

export default TitleHeader;