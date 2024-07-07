import React, { FC } from "react";
import CaseBlock from "./CaseBlock";

import '../styles/componentStyles/CasesBlock.scss';


const CasesBlock:FC = () =>{

    return (
        <div className="cases-block">    
            <CaseBlock indicatorText="20K+" nameText="subscribers" />
            <CaseBlock indicatorText="19,5K" nameText="successful cases" />
            <CaseBlock indicatorText="4.8/5" nameText="rating" />
        </div>
    )
}

export default CasesBlock;