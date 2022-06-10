import React from "react";
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Swiggy from './Pages/Swiggy'
import './App.css'

function App() {

  return (
    <div className="App">
      <nav className="navcont">
        <h4>
          <Link  to="/">Home</Link>
        </h4>
        <h4>
          <Link to="/swiggy">Swiggy</Link>
        </h4>
      </nav>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Swiggy />} path="/swiggy" />
      </Routes>
      
    </div>
  );
}

export default App;
