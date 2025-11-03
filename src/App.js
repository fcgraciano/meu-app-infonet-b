import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Telas/Home/Home'
import Clientes from './Telas/Clientes/Clientes'
import Atendentes from './Telas/Atendentes/Atendentes'
import Servicos from './Telas/Servicos/Servicos'
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Atendentes">Atendentes</Link>
        <Link to="/Clientes">Clientes</Link>
        <Link to="/Servicos">Serviços</Link>
      </nav>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Atendentes" element={<Atendentes/>} />
          <Route path="/Clientes" element={<Clientes/>} />
          <Route path="/Servicos" element={<Servicos/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
