import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css';
import './styles/style.scss';

const App: React.FC = () => {
    return <h1>Hello, React App with TypeScript and Webpack! Yes!</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));