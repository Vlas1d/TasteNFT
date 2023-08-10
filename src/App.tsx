import * as React from "react";
import Main from './components/pages/main/Main';

export interface HelloWorldProps {
    userName: string;
    lang: string;
}
const App = () => {
    return (
        <>
            <Main />
        </>
    );
}

export default App;