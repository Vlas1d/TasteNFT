import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from './components/pages/main/Main';
import Artwork from './components/pages/artwork/Artwork';
import Profile from './components/pages/profile/Profile';
import Search from './components/pages/search/Search';

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/artwork" element={<Artwork />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </>
    );
}

export default App;

/*
<nav>
                <Link to="/">Home</Link>
                <Link to="/artwork">Artwork</Link>
                <Link to="/profile">MyProfile</Link>
            </nav>
*/