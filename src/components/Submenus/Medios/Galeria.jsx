import React from 'react';
import styles from './GV.module.css';

function Galeria() {
  return (
    <div className={styles['suga-page']}>
      <h1 className={styles.titulo}>Galería de Suga</h1>

      <section className={styles['gallery-section']}>
        <h2 className={styles.subtitulo}>Mixtapes de Suga</h2>
        <div className={styles['grid-gallery']}>
          {mixtapes.map((mixtape, index) => (
            <div key={index} className={styles['grid-item']}>
              <img src={mixtape.src} alt={mixtape.title} className={styles['grid-image']} />
              <h3>{mixtape.title}</h3>
              <p>{mixtape.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles['gallery-section']}>
        <h2 className={styles.subtitulo}>Colaboraciones</h2>
        <div className={styles['grid-gallery']}>
          {collaborations.map((collaboration, index) => (
            <div key={index} className={styles['grid-item']}>
              <img src={collaboration.src} alt={collaboration.title} className={styles['grid-image']} />
              <h3>{collaboration.title}</h3>
              <p>{collaboration.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles['gallery-section']}>
        <h2 className={styles.subtitulo}>Eventos y Conciertos</h2>
        <div className={styles['grid-gallery']}>
          {events.map((event, index) => (
            <div key={index} className={styles['grid-item']}>
              <img src={event.src} alt={event.title} className={styles['grid-image']} />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const mixtapes = [
  { src: '/imagenes/2016.jpg', title: 'Agust D', description: 'Mixtape debut de Suga lanzado en 2016.' },
  { src: '/imagenes/2020.jpg', title: 'D-2', description: 'Segundo mixtape de Suga lanzado en 2020.' },
  { src: '/imagenes/2023.jpg', title: 'D-Day', description: 'Tercer mixtape de Suga lanzado en 2023.' },
];

const collaborations = [
  { src: '/imagenes/Colab1.jpg', title: 'Song Request con Lee Sora', description: 'Una colaboración emocional lanzada en 2019.' },
  { src: '/imagenes/Colab2.jpg', title: 'Blueberry Eyes con MAX', description: 'Una colaboración romántica lanzada en 2020.' },
  { src: '/imagenes/Colab3.jpg', title: 'Lilith con Halsey', description: 'Colaboración destacada lanzada en 2020.' },
  { src: '/imagenes/Colab4.webp', title: 'That That con PSY', description: 'Una colaboración energética lanzada en 2022.' },
  { src: '/imagenes/Colab5.png', title: 'Eight con IU', description: 'Una emotiva colaboración lanzada en 2020.' },
  { src: '/imagenes/Colab6.jpg', title: 'So Far Away con Suran y Yankie', description: 'Colaboración introspectiva lanzada en 2017.' },
];

const events = [
  { src: '/imagenes/Concierto.jpg', title: 'Concierto de BTS en Wembley', description: 'Un momento icónico en 2019.' },
  { src: '/imagenes/Festival.webp', title: 'Festival Lollapalooza', description: 'Presentación en solitario en 2023.' },
  { src: '/imagenes/Fansign.jpg', title: 'Evento Fansign', description: 'Interacción especial con fans.' },
];

export default Galeria;
