import React, { FC } from "react";

import '../styles/componentStyles/Feedback.scss';

type Props ={
    userImage: string,
    firstName: string,
    nickname: string,
    feedbackText: string,
}

const Feedback:FC<Props> = (props: Props) =>{

    return (
        <div className="feedback">
            <div className="feedback__user">
                <div className="feedback__image">
                    <img src={props.userImage} alt={props.firstName} />
                </div>
                <div className="feedback__name">
                    <span className="feedback__name__first">{props.firstName}</span>
                    <span className="feedback__name__nickname">{props.nickname}</span>
                </div>
            </div>
            <div className="feedback__text">
                <p>{props.feedbackText}</p>
            </div>
        </div>
    )
}

export default Feedback;