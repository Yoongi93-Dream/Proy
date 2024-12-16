import React from 'react';
import styles from './CD.module.css';

function Discografia() {
  return (
    <div className={styles['cd-container']}>
      <h1 className={styles.titulo}>Discografía de Suga</h1>
      <p className={styles.descripcion}>
        Descubre la impresionante discografía de Suga, desde sus inicios hasta sus proyectos más recientes. Cada álbum y canción refleja su evolución artística y su dedicación a la música.
      </p>

      {/* Mixtapes de Suga */}
      <div className={styles.albumes}>
        {/* Agust D */}
        <div className={styles.album}>
          <h2 className={styles.subtitulo}>Álbum: *Agust D*</h2>
          <p>Año: 2016</p>
          <p>
            El mixtape debut de Suga como Agust D. Este álbum independiente está lleno de emociones crudas y letras impactantes que exploran su lucha personal y su pasión por la música.
          </p>
          <ul>
            <li>"Intro: DT sugA"</li>
            <li>"Agust D"</li>
            <li>"Give It To Me"</li>
            <li>"So Far Away"</li>
            <li>"First Love"</li>
            <li>"Answer: Love Myself"</li>
            <li>"The Last"</li>
          </ul>
        </div>

        {/* D-2 */}
        <div className={styles.album}>
          <h2 className={styles.subtitulo}>Álbum: *D-2*</h2>
          <p>Año: 2020</p>
          <p>
            Este segundo mixtape presenta un enfoque más maduro y experimental, con una mezcla de géneros y colaboraciones con artistas como MAX. Es una obra maestra que captura su crecimiento personal y artístico.
          </p>
          <ul>
            <li>"Moonlight"</li>
            <li>"Daechwita"</li>
            <li>"What Do You Think?"</li>
            <li>"Strange"</li>
            <li>"People"</li>
            <li>"Honsool"</li>
            <li>"Interlude: Set Me Free"</li>
            <li>"Dear My Friend"</li>
            <li>"Burn It"</li>
          </ul>
        </div>

        {/* D-Day */}
        <div className={styles.album}>
          <h2 className={styles.subtitulo}>Álbum: *D-Day*</h2>
          <p>Año: 2023</p>
          <p>
            El tercer mixtape de Suga, que presenta un enfoque más oscuro y experimental. Con colaboraciones con artistas como IU y Sumin, este álbum es una obra maestra que muestra su crecimiento como artista.
          </p>
          <ul>
            <li>"Honsool"</li>
            <li>"People"</li>
            <li>"First Love"</li>
            <li>"Dear My Friend"</li>
            <li>"Eight" (con IU)</li>
            <li>"So Far Away" (con Sumin)</li>
            <li>"Snooze"</li>
            <li>"Haegeum"</li>
            <li>"Life Goes On"</li>
          </ul>
        </div>
      </div>

      {/* Contribuciones a los álbumes de BTS */}
      <div className={styles.albumes}>
        <h2 className={styles.subtitulo}>Contribuciones en los álbumes de BTS</h2>
        <p>
          Además de su carrera en solitario, Suga ha jugado un papel fundamental en los álbumes de BTS, no solo como miembro, sino también como compositor y productor. Aquí algunas de sus contribuciones más destacadas:
        </p>

        {/* 2 Cool 4 Skool */}
        <div className={styles.album}>
          <h3 className={styles.subtitulo}>Álbum: *2 Cool 4 Skool* (2013)</h3>
          <ul>
            <li>"No More Dream"</li>
            <li>"I Like It"</li>
            <li>"Attack on Bangtan"</li>
          </ul>
        </div>

        {/* Dark & Wild */}
        <div className={styles.album}>
          <h3 className={styles.subtitulo}>Álbum: *Dark & Wild* (2014)</h3>
          <ul>
            <li>"Danger"</li>
            <li>"War of Hormone"</li>
            <li>"Let Me Know"</li>
          </ul>
        </div>

        {/* The Most Beautiful Moment in Life */}
        <div className={styles.album}>
          <h3 className={styles.subtitulo}>Álbum: *The Most Beautiful Moment in Life* (2015)</h3>
          <ul>
            <li>"I Need U"</li>
            <li>"Dope"</li>
            <li>"Run"</li>
          </ul>
        </div>

        {/* WINGS */}
        <div className={styles.album}>
          <h3 className={styles.subtitulo}>Álbum: *WINGS* (2016)</h3>
          <ul>
            <li>"Blood Sweat & Tears"</li>
            <li>"Begin" (Canción solista de Suga)</li>
          </ul>
        </div>

        {/* Love Yourself: Tear */}
        <div className={styles.album}>
          <h3 className={styles.subtitulo}>Álbum: *Love Yourself: Tear* (2018)</h3>
          <ul>
            <li>"Fake Love"</li>
            <li>"The Truth Untold"</li>
            <li>"Trivia: Seesaw" (Canción solista de Suga)</li>
          </ul>
        </div>

        {/* Map of the Soul: Persona */}
        <div className={styles.album}>
          <h3 className={styles.subtitulo}>Álbum: *Map of the Soul: Persona* (2019)</h3>
          <ul>
            <li>"Intro: Persona"</li>
            <li>"Boy with Luv" (con Halsey)</li>
            <li>"Suga's Interlude" (con Halsey)</li>
          </ul>
        </div>

        {/* BE */}
        <div className={styles.album}>
          <h3 className={styles.subtitulo}>Álbum: *BE* (2020)</h3>
          <ul>
            <li>"Life Goes On"</li>
            <li>"Dynamite" (aunque lanzada antes del álbum, forma parte de la promoción de BE)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Discografia;
