import React, { FC } from "react";
import bitcoin from "../images/background/bitcoin.svg"
import litecoin from "../images/background/litecoin.svg"
import ethereum from "../images/background/ethereum.svg"

import '../styles/componentStyles/Background.scss';



const Background:FC = () =>{

    return (
        <div className="background">    
            <div className="background__coin background__bitcoin">
                <img src={bitcoin} alt="bitcoin" />
            </div>
            <div className="background__coin background__litecoin">
                <img src={litecoin} alt="litecoin" />
            </div>
            <div className="background__coin background__ethereum">
                <img src={ethereum} alt="ethereum" />
            </div>
        </div>
    )
}

export default Background;