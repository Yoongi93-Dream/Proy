import React, { useState, useEffect } from 'react';
import styles from './Comunidad.module.css';

function Comunidad() {
  const [mes, setMes] = useState(new Date().getMonth());
  const [año, setAño] = useState(new Date().getFullYear());
  const [dias, setDias] = useState([]);
  const [eventos, setEventos] = useState([
    { fecha: '2023-12-25', titulo: 'Mensaje especial de Navidad de Suga' },
    { fecha: '2024-01-01', titulo: 'Concierto en Tokio' },
    { fecha: '2024-02-14', titulo: 'Sesión de preguntas y respuestas en vivo' },
    { fecha: '2024-03-15', titulo: 'Lanzamiento de nuevo álbum' },
    { fecha: '2024-04-10', titulo: 'Firma de autógrafos en Los Ángeles' },
  ]);
  const [comentarios, setComentarios] = useState([
    { autor: 'Fan 1', texto: '¡Me encantó el concierto de Suga en Seúl!' },
    { autor: 'Fan 2', texto: 'Estoy emocionado por el nuevo álbum, ¡será épico!' },
    { autor: 'Fan 3', texto: 'El mensaje de Navidad me hizo llorar 🥹.' },
  ]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  useEffect(() => {
    const diasDelMes = new Date(año, mes + 1, 0).getDate();
    const diasArray = [];
    for (let i = 1; i <= diasDelMes; i++) {
      diasArray.push(i);
    }
    setDias(diasArray);
  }, [mes, año]);

  const handleMesChange = (e) => {
    setMes(parseInt(e.target.value));
  };

  const handleAñoChange = (e) => {
    setAño(parseInt(e.target.value));
  };

  const agregarComentario = () => {
    if (nuevoComentario.trim() !== '') {
      setComentarios([...comentarios, { autor: 'Fan', texto: nuevoComentario }]);
      setNuevoComentario('');
    }
  };

  return (
    <div className={styles['comunidad-container']}>
      <h1 className={styles.titulo}>Comunidad de Fans</h1>
      <p className={styles.descripcion}>
        ¡Bienvenidos a nuestra comunidad! Aquí puedes participar en foros de discusión, descubrir eventos exclusivos, y compartir tus experiencias como fan de Suga.
      </p>

      {/* Sección de eventos */}
      <div className={styles.seccion}>
        <h2 className={styles.subtitulo}>Eventos</h2>
        <p>Explora los eventos relacionados con Suga:</p>
        <div>
          <select value={mes} onChange={handleMesChange}>
            {Array.from({ length: 12 }, (_, index) => (
              <option key={index} value={index}>
                {new Date(0, index).toLocaleString('es-ES', { month: 'long' })}
              </option>
            ))}
          </select>
          <select value={año} onChange={handleAñoChange}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <div className={styles.calendario}>
          {dias.map((dia) => {
            const eventosDia = eventos.filter((evento) => {
              const fechaEvento = new Date(evento.fecha);
              return (
                fechaEvento.getDate() === dia &&
                fechaEvento.getMonth() === mes &&
                fechaEvento.getFullYear() === año
              );
            });

            return (
              <div
                key={dia}
                className={`${styles.dia} ${
                  eventosDia.length > 0 ? styles.evento : ''
                }`}
              >
                {dia}
                {eventosDia.map((evento) => (
                  <p key={evento.fecha} className={styles['evento-titulo']}>
                    {evento.titulo}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Sección de comentarios */}
      <div className={styles.seccion}>
        <h2 className={styles.subtitulo}>Comentarios</h2>
        <div className={styles.comentarios}>
          {comentarios.map((comentario, index) => (
            <div key={index} className={styles.comentario}>
              <strong>{comentario.autor}:</strong> {comentario.texto}
            </div>
          ))}
        </div>
        <textarea
          className={styles['nuevo-comentario']}
          placeholder="Escribe tu comentario aquí..."
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
        ></textarea>
        <button className={styles['btn-enviar']} onClick={agregarComentario}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Comunidad;
