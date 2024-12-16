import React from 'react';
import styles from './CP.module.css';

function CarreraMusical() {
  return (
    <div className={styles.carreraMusical}>
      <h1 className={styles.titulo}>Carrera Musical de Suga</h1>

      <section className={styles.seccion}>
        <h2>Primeros Pasos en la Música</h2>
        <p>
          Min Yoon-gi, conocido artísticamente como Suga, comenzó su relación
          con la música a una edad temprana, inspirado por artistas del hip-hop
          surcoreano como Epik High. A los 13 años, ya componía canciones y
          experimentaba con tecnología MIDI, lo que marcó el inicio de su
          carrera como productor.
        </p>
        <p>
          Durante su adolescencia, Suga formó parte del grupo de rap underground
          "D-Town", donde produjo temas de contenido social y político. Una de
          sus composiciones más notables de esa época fue "518-062", un homenaje
          a la Masacre de Gwangju.
        </p>
      </section>

      <section className={styles.seccion}>
        <h2>Debut con BTS</h2>
        <p>
          En 2013, después de tres años de entrenamiento intensivo, Suga debutó
          como rapero principal de BTS bajo Big Hit Entertainment. Desde su
          debut, ha sido una fuerza creativa dentro del grupo, participando en
          la escritura y producción de muchas de sus canciones más icónicas,
          como "I Need U", "Dope" y "Spring Day".
        </p>
        <p>
          Su enfoque lírico a menudo combina temas sociales, reflexiones
          personales y mensajes de empoderamiento. Suga no solo se ha limitado a
          ser rapero, sino que también ha explorado su talento como productor,
          mostrando una versatilidad que le ha permitido destacarse tanto
          dentro como fuera del grupo.
        </p>
      </section>

      <section className={styles.seccion}>
        <h2>Reconocimientos y Logros</h2>
        <p>
          Como miembro de BTS, Suga ha sido parte de innumerables éxitos
          globales, desde premios Billboard hasta colaboraciones con artistas
          internacionales. En 2018, junto a BTS, recibió la Orden al Mérito
          Cultural de Corea del Sur, un reconocimiento por su impacto en la
          promoción de la cultura coreana en el mundo.
        </p>
        <p>
          En 2021, BTS fue nombrado Enviado Presidencial Especial para las
          Generaciones Futuras y la Cultura, consolidando aún más su papel como
          embajadores culturales globales.
        </p>
      </section>

      <section className={styles.seccion}>
        <h2>Filosofía Artística</h2>
        <p>
          Suga ha mencionado en varias entrevistas que ve la música como un
          medio para sanar y conectar. Su capacidad para plasmar emociones y
          experiencias humanas complejas lo ha convertido en una voz influyente
          para millones de personas en todo el mundo.
        </p>
        <p>
          Con una pasión inquebrantable por su arte y un compromiso constante
          con la evolución musical, Suga sigue siendo un ejemplo de
          perseverancia y autenticidad en la industria musical.
        </p>
      </section>
    </div>
  );
}

export default CarreraMusical;
