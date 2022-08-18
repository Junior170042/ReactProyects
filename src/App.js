import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Popular from './components/Popular';
import Kids from './pages/Kids';
import Comedies from './pages/Comedies';
import Dramas from './pages/Dramas';
import Search from './pages/Search';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/populares" element={<Popular />} />
        <Route path="/enfantiles" element={<Kids />} />
        <Route path="/comedias" element={<Comedies />} />
        <Route path="/dramas" element={<Dramas />} />
        <Route path="/buscador/:key" element={<Search />} />
      </Routes>

    </>
  );
}

export default App;
