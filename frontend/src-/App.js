import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Watch from './pages/Watch';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <nav className="flex justify-between p-4 bg-blue-900">
          <h1 className="text-golden-yellow font-bold text-xl">AnimeStream</h1>
          <div>
            <Link to="/" className="px-4 text-white">Home</Link>
            <Link to="/about" className="px-4 text-white">About</Link>
            <Link to="/watch" className="px-4 text-white">Watch</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
