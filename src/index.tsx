import React from "react";
import ReactDom from "react-dom";
import { App } from "./App";

const root = document.getElementById('root') as HTMLBodyElement;
const a: string = '123456789';

let component = (
    <>
        <h1>Заголовок</h1>
        <b>текст 1</b>
        <b>текст 2: {Array.from(a)}</b>
        <App />
    </>
);

ReactDom.render(component, root);