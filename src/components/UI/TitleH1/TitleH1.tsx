import React, { FC } from "react";

import cl from './TitleH1.module.scss';

type Props = {
    text: string,
    decorativeText: string
}

const TitleH1: FC<Props> = (props: Props) => {

    return (
        <h1 className={cl.title}>{props.text}
            {
            props.decorativeText.length > 0 ?
                <span className={cl.title__text_decorative}>{props.decorativeText}</span>
            :
                ""
            }
        </h1>
    )
}

export default TitleH1;