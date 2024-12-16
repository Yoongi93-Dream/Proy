import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Suga from './components/Suga/Suga';
import CarreraMusical from './components/Submenus/Suga/CarreraMusical';
import ProyectosSolitarios from './components/Submenus/Suga/ProyectosSolitarios';
import Musica from './components/Musica/Musica';
import Discografia from './components/Submenus/Musica/Discografia';
import Colaboraciones from './components/Submenus/Musica/Colaboraciones';
import Medios from './components/Medios/Medios';
import Galeria from './components/Submenus/Medios/Galeria';
import Videos from './components/Submenus/Medios/Videos';
import Comunidad from './components/Comunidad/Comunidad';
import './Principal.css'; 

function Principal() {
  return (
    <BrowserRouter>
      <div>
        <h1>Cantante Favorito</h1>

        {/* Menú principal */}
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/suga">Suga</Link>
              <ul className="submenu">
                <li><Link to="/suga/carrera-musical">Carrera musical</Link></li>
                <li><Link to="/suga/proyectos-solitarios">Proyectos en solitario</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/musica">Música</Link>
              <ul className="submenu">
                <li><Link to="/musica/discografia">Discografía</Link></li>
                <li><Link to="/musica/colaboraciones">Colaboraciones</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/medios">Medios</Link>
              <ul className="submenu">
                <li><Link to="/medios/galeria">Galeria</Link></li>
                <li><Link to="/medios/videos">Videos</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/comunidad">Comunidad</Link>
            </li>
          </ul>
        </nav>

        {/* Rutas para cada sección */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/suga" element={<Suga />} />
          <Route path="/suga/carrera-musical" element={<CarreraMusical />} />
          <Route path="/suga/proyectos-solitarios" element={<ProyectosSolitarios />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/musica/discografia" element={<Discografia />} />
          <Route path="/musica/colaboraciones" element={<Colaboraciones />} />
          <Route path="/medios" element={<Medios />} />
          <Route path="/medios/galeria" element={<Galeria />} />
          <Route path="/medios/videos" element={<Videos />} />
          <Route path="/comunidad" element={<Comunidad />} />
        </Routes>

        {/* Pie de página */}
        <footer className="footer">
          <div className="footer-content">
            <p>
              &copy; {new Date().getFullYear()} - Mi Proyecto React. Todos los derechos reservados.
            </p>
            <p>
              Hecho con <span className="heart">❤</span> por Jhoselin
            </p>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default Principal;