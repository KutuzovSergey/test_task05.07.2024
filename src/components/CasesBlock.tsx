import React, { FC } from "react";
import Case from "./Case";

import '../styles/componentStyles/CasesBlock.scss';


const CasesBlock:FC = () =>{

    return (
        <div className="cases-block">    
            <Case indicatorText="20K+" nameText="subscribers" />
            <Case indicatorText="19,5K" nameText="successful cases" />
            <Case indicatorText="4.8/5" nameText="rating" />
        </div>
    )
}

export default CasesBlock;