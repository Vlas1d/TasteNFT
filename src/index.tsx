import React from "react";
import ReactDom from "react-dom";
import { App } from "./App";
import "./styles/style.scss"

const root = document.getElementById('root') as HTMLBodyElement;
const a: string = '123456789';
import imgPng from './images/1.png';
import imgWebp from './images/1.png?as=webp';

let component = (
    <>
        <h1>Заголовок</h1>
        <b>текст 1</b>
        <b>текст 2: {Array.from(a)}</b>
        <App />
        <img src={imgWebp} />
        <picture >
            <source type='image/webp' srcSet='1.webp' />
            <img src="1.png" alt="slider-1" className="main-slider__img" />
        </picture>
    </>
);

ReactDom.render(component, root);
/*
<picture>
    <source src={imgWebp} type="image/webp" />
    <source src={imgPng} type="image/png" />
    <img src={imgPng} alt="image" />
</picture>
*/