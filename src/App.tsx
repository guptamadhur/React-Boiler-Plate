import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PropTypes from 'prop-types';
import About from './pages/About';

interface AppProps {
  url?: string;
}

export default function App({ url }: AppProps) {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

App.propTypes = {
  url: PropTypes.string
};
