import React from 'react';

import style from './userBig.module.scss';

interface UserBigProps {
    image: string;
    name: string;
}

const UserBig = (props: UserBigProps) => {

    const tag: string = `@${props.name.replace(/\s/g, "").toLocaleLowerCase()}`;

    return (
        <div className={style.userBig}>
            <img src={props.image} alt={props.image} />
            <h3 className={style.userBig__name}>{props.name}</h3>
            <a className={style.userBig__tag} href='#'>{tag}</a>
            <span>24 sales on 32ETH</span>
        </div>
    );
}

export default UserBig;