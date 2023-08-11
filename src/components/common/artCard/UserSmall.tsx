import React from 'react';

import style from './userSmall.module.scss';

interface UserSmallProps {
    image: string;
    name: string;
}

const UserSmall = (props: UserSmallProps) => {

    const tag: string = `@${props.name.replace(/\s/g, "").toLocaleLowerCase()}`;

    return (
        <div className={style.userSmall}>
            <img src={props.image} alt='user' />
            <div>
                <span className={style.userSmall__name}>{props.name}</span>
                <a href='#' className={style.userSmall__tag}>{tag}</a>
            </div>
        </div>
    );
}

export default UserSmall;