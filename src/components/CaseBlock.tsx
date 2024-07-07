import React, { FC } from "react";

import '../styles/componentStyles/CaseBlock.scss';

type Props = {
    indicatorText: string,
    nameText: string,
}
const CaseBlock:FC<Props> = (props: Props) =>{

    return (
        <div className="case">  
            <div className="case__indicator">
                <span className="case__indicator__text">{props.indicatorText}</span>
            </div>
            <div className="case__name">
                <span className="case__name__text">{props.nameText}</span>
            </div>  
        </div>
    )
}

export default CaseBlock;