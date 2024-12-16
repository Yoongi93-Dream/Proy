import React from 'react';
import styles from './Medios.module.css';

function Medios() {
  return (
    <div className={styles.mediosContainer}>
      <h1>BTS - Suga: Noticias y Contenido Exclusivo</h1>

      <div className={styles.videoContainer}>
        <iframe 
          width="759" 
          height="427" 
          src="https://www.youtube.com/embed/xNmDf85c0AQ" 
          title="La Banda que LOGRÓ lo IMPOSIBLE | BTS | Documental" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        />
      </div>

      <p className={styles.descripcion}>
        Con su estilo auténtico y letras profundas, Suga ha tocado temas como la salud mental, las luchas personales y su visión del mundo, lo que lo convierte en una figura importante dentro del movimiento musical actual.
      </p>

      <h2 className={styles.subtitulo}>NOTICIAS EN SU CARRERA</h2>
      <ul className={styles.listaNoticias}>
        <li>
          <a href="https://www.latercera.com/tendencias/noticia/suga-de-bts-lanzara-un-nuevo-disco-entre-medio-de-su-servicio-militar-y-con-un-alter-ego/BWK4DRK7O5C25C3BLUTGRPR6V4/">Suga lanza nuevo sencillo</a>
        </li>
        <li>
          <a href="https://larepublica.pe/cultura-asiatica/bts/2023/02/14/bts-suga-anuncia-tour-mundial-2023-en-que-paises-dara-conciertos-antes-de-su-servicio-militar-en-corea-del-sur-agust-d-kpop-1149204">Suga anuncia gira mundial</a>
        </li>
        <li>
          <a href="https://www.elsiglodetorreon.com.mx/noticia/2022/las-mejores-colaboraciones-que-suga-de-bts-ha-sacado.html">Suga colabora con artista internacional</a>
        </li>
      </ul>

      <h2 className={styles.subtitulo}>ULTIMAS NOTICIAS</h2>
      <h3 className={styles.subtitulo}>Suga se despide: Su ida al servicio militar</h3>
      <p className={styles.descripcion}>
        El 13 de septiembre de 2023, Suga, miembro de la popular banda surcoreana BTS, se despidió de sus fans y se unió al ejército surcoreano para cumplir con su servicio militar obligatorio.
      </p>
      <p className={styles.descripcion}>
        <strong>La despedida emocional:</strong> La despedida de Suga fue un momento emocional para los fans de BTS, conocidos como ARMY. Muchos de ellos se reunieron en el aeropuerto de Seúl para despedir a Suga y mostrar su apoyo y ánimo durante su servicio militar.
      </p>
      <p className={styles.descripcion}>
        <strong>El servicio militar en Corea del Sur:</strong> En Corea del Sur, el servicio militar es obligatorio para todos los ciudadanos masculinos entre las edades de 18 y 35 años. El servicio militar dura aproximadamente 18 meses, durante los cuales los soldados reciben entrenamiento militar y cumplen con sus deberes en diferentes unidades del ejército.
      </p>
      <p className={styles.descripcion}>
        <strong>El impacto en la carrera de BTS:</strong> La ida de Suga al servicio militar puede afectar la carrera de BTS, ya que el grupo no podrá realizar actividades en grupo durante un período de tiempo. Sin embargo, los miembros de BTS han expresado su apoyo y ánimo para Suga durante su servicio militar, y han asegurado que el grupo seguirá adelante con sus actividades individuales y en grupo.
      </p>
      <p className={styles.descripcion}>
        <strong>Un mensaje de apoyo para Suga:</strong> Aunque Suga estará ausente durante un período de tiempo, su legado y su música seguirán vivos en el corazón de los fans de BTS. Queremos enviar un mensaje de apoyo y ánimo para Suga durante su servicio militar, y asegurarle que siempre será recordado y apreciado por su contribución a la música y la cultura pop.
      </p>
      <p className={styles.descripcion}>
        <strong>Fotos y videos de la despedida:</strong> Aquí te presentamos algunas fotos y videos de la despedida de Suga en el aeropuerto de Seúl:
      </p>
      <div className={styles.mediosContenido}>
        {/* Aquí se pueden insertar enlaces a fotos o videos relevantes */}
      </div>
    </div>
  );
}

export default Medios
