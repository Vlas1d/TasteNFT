import React from 'react';

import style from './button.module.scss';

interface ButtonProps {
    name: string;
    style: string;
}

const Button = (props: ButtonProps) => {
    return (
        <button className={props.style}>{props.name}</button>
    );
}

export default Button;