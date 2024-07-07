import React, { FC } from "react";

import cl from './TitleSpan.module.scss';

type Props = {
    children: string,
}

const TitleSpan: FC<Props> = ({children}: Props) => {

    return (
        <div className={cl.title}>
            <span className={cl.title__text}>{children}</span>
        </div>
    )
}

export default TitleSpan;