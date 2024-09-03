// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Appointments from './components/Appointments'; // Importa el componente de citas

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Muestra Appointments en la ruta principal */}
        <Route path="/" element={<Appointments />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} /> {/* Puedes mover Home a otra ruta si quieres */}
      </Routes>
    </Router>
  );
}

export default App;
