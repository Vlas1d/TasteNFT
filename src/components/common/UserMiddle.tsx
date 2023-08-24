import React from 'react';

import avatar from '../../images/small/user.png';

import style from './userMiddle.module.scss';

interface UserMiddleProps {
    name: string;
}

const UserMiddle = (props: UserMiddleProps) => {

    const tag: string = `@${props.name.replace(/\s/g, "").toLocaleLowerCase()}`;

    return (
        <div className={style.userMiddle}>
            <img src={avatar} alt='user' />
            <div>
                <span className={style.userMiddle__name}>{props.name}</span>
                <a href='#/profile' className={style.userMiddle__tag}>{tag}</a>
            </div>
        </div>
    );
}

export default UserMiddle;