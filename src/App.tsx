import * as React from "react";
import "./style.module.scss";

export interface HelloWorldProps {
    userName: string;
    lang: string;
}
function App(props: HelloWorldProps) {
    return (
        <h1 className="aaa">
            Hi {props.userName} from React! Welcome to {props.lang}!
        </h1>
    );
}

export default App;