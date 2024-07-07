import React, { FC } from "react";

import cl from './Button.module.scss';

type Props = {
    children: string,
}

const Button: FC<Props> = ({children}: Props) => {

    return (
        <div className={cl.button_wrapper}>
            <button  className={cl.button}>{children}</button>
        </div>
    )
}

export default Button;