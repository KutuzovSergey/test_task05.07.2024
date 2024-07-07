import React, { FC } from "react";
import CaseBlock from "./CaseBlock";

import '../styles/componentStyles/OperatingSystem.scss';

type Props = {
    operatingImage: string,
    operatingText: string,
    operatingName: string,
}

const OperatingSystem:FC<Props> = (props: Props) =>{

    return (
        <div className="operating-block"> 
            <div className="operating-block__image">
                <img src={props.operatingImage} alt="" />
            </div>
            <a href="#" className="operating-block__link">
                <span className="operating-block__text">{props.operatingText}</span>
                <span className="operating-block__name">{props.operatingName}</span>
            </a>
        </div>
    )
}

export default OperatingSystem;