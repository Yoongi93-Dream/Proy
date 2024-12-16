import React from 'react';
import styles from './CP.module.css'; 

function ProyectosSolitarios() {
  return (
    <div className={styles.proyectosSolitarios}>
      <h1 className={styles.titulo}>Proyectos en Solitario de Suga</h1>

      <section className={styles.seccion}>
        <h2>Agust D: Un Alter Ego Intenso</h2>
        <p>
          En 2016, Suga debutó como artista en solitario bajo el nombre de Agust D, un alter ego que le permitió
          explorar aspectos más personales y crudos de su vida. Su mixtape *Agust D* fue un golpe directo al corazón 
          de la industria, abordando temas como la salud mental, la lucha contra la depresión y su experiencia como
          aprendiz en la industria musical.
        </p>
        <p>
          Canciones como "The Last" y "Agust D" destacaron por su intensidad y sinceridad, ganando reconocimiento por 
          su autenticidad. A través de este proyecto, Suga mostró una faceta más vulnerable, demostrando que incluso 
          las estrellas más brillantes enfrentan sombras.
        </p>
      </section>

      <section className={styles.seccion}>
        <h2>D-2: Una Evolución Artística</h2>
        <p>
          En 2020, Suga lanzó su segundo mixtape, *D-2*. Este trabajo marcó una evolución significativa en su 
          enfoque musical, combinando elementos de rap, hip-hop y música tradicional coreana. Canciones como 
          "Daechwita" mezclaron instrumentos tradicionales con beats modernos, creando una experiencia única.
        </p>
        <p>
          *D-2* recibió elogios tanto de críticos como de fans por su profundidad lírica y diversidad sonora. El 
          mixtape exploró temas como la identidad, el éxito y el anhelo por la paz interior, consolidando a Suga 
          como uno de los artistas más versátiles y creativos de su generación.
        </p>
      </section>

      <section className={styles.seccion}>
        <h2>Colaboraciones de Alto Perfil</h2>
        <p>
          Suga ha colaborado con numerosos artistas a nivel global, incluyendo a Halsey, IU, MAX y Suran. En 2020, 
          produjo y participó en "Eight", un éxito de IU que dominó las listas musicales en Corea del Sur y obtuvo 
          reconocimiento internacional.
        </p>
        <p>
          Cada colaboración de Suga destaca por su capacidad de adaptarse al estilo del artista con el que trabaja, 
          mientras mantiene su sello distintivo. Estas colaboraciones han ampliado su alcance global y han fortalecido 
          su reputación como un productor e intérprete de clase mundial.
        </p>
      </section>

      <section className={styles.seccion}>
        <h2>Producción y Composición</h2>
        <p>
          Además de sus propios proyectos, Suga ha trabajado como productor y compositor para otros artistas, dentro y 
          fuera de BTS. Su enfoque meticuloso y su oído para la música han hecho que cada una de sus producciones sea 
          un testimonio de su talento y pasión.
        </p>
        <p>
          Proyectos como estos no solo reflejan su genio musical, sino también su compromiso con el arte como un medio 
          de expresión universal.
        </p>
      </section>
    </div>
  );
}

export default ProyectosSolitarios;
