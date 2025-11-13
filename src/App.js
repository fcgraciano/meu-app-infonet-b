import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Telas/Home/Home'
import Clientes from './Telas/Clientes/Clientes'
import Atendentes from './Telas/Atendentes/Atendentes'
import Servicos from './Telas/Servicos/Servicos'
function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Atendentes">Atendentes</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/Clientes">Clientes</Link>
              </li>
                   
              <li className="nav-item">
                <Link  className="nav-link"  to="/Servicos">Serviços</Link>
              </li>
             
            </ul>

          </div>
        </div>
      </nav>
      <div className='container mt-3' style={{
        backgroundColor:'#FFF',
        padding:'10px 20px',
        borderRadius:'10px',
        boxShadow: '5px 2px 20px black'
        }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Atendentes" element={<Atendentes />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Servicos" element={<Servicos />} />
      </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
