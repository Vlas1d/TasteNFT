import React, { useRef, useState } from 'react';

import s from './dropList.module.scss';

import arrow from '../../../images/svg/arrow1.svg'

interface DropListProps {
    name: string;
}

const DropList = (props: DropListProps) => {
    return (
        <div className={s.dropList}>
            <span>{props.name}</span>
            <img src={arrow} alt={arrow} />
        </div>
    );
}

export default DropList;