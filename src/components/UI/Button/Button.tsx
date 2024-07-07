import React, { FC } from "react";

import cl from './Button.module.scss';

type Props = {
    children: string,
}

const Button: FC<Props> = ({children}: Props) => {

    return (
        <button  className={cl.button}>{children}</button>
    )
}

export default Button;