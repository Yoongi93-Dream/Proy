import React from 'react';
import styles from './GV.module.css';

function Videos() {
  return (
    <div className={styles.gvContainer}>
      <h1 className={styles.titulo}>Videos Destacados de Suga</h1>
      <p className={styles.descripcion}>
        Sumérgete en el universo de Suga a través de estos videos, que incluyen presentaciones en vivo, entrevistas y detrás de cámaras.
      </p>
      <div className={styles.videos}>
        <div className={styles.video}>
          <iframe width="853" height="480" src="https://www.youtube.com/embed/Ue8qMlhiPGM" title="[#2022MAMA] BTS(방탄소년단) MAMA PERFORMANCE COMPILATION (2022 MAMA 수상자 역대 마마 무대 모아보기)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <p>Presentación en los MAMA Awards 2022</p>
        </div>
        <div className={styles.video}>
          <iframe width="759" height="427" src="https://www.youtube.com/embed/LcagSpuODCY" title="[sub. español]  Entrevista a Agust D del Mixtape &#39;D-2&#39;" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <p>Entrevista sobre D-2</p>
        </div>
        <div className={styles.video}>
          <iframe width="759" height="427" src="https://www.youtube.com/embed/KWRJ8CUBsXI" title="[EPISODE] Agust D &#39;대취타&#39; MV Shoot Sketch" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <p>Detrás de cámaras de Daechwita</p>
        </div>
      </div>

      <h2 className={styles.subtitulo}>RUN BTS</h2>
      <p className={styles.descripcion}>
        Aquí encontrarás algunos de los videos más divertidos sobre la participación de todo el grupo BTS en una serie de episodios llamada "Run BTS", donde realizan distintas actividades y desafíos.
      </p>
      <div className={styles.videosContainer}>
        <iframe width="759" height="427" src="https://www.youtube.com/embed/s6l0uluydKY" title="Completo BTS Run episodio 131 y 132 / Español" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <iframe width="759" height="427" src="https://www.youtube.com/embed/2JRDknuYQfE" title="[Sub español] RUN BTS 2019 - EP. 66" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <iframe width="759" height="427" src="https://www.youtube.com/embed/yP_5bDZnAHc" title="[Sub español] RUN BTS 2019 - EP. 72" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <iframe width="759" height="427" src="https://www.youtube.com/embed/1iB58uNm084?list=PLPSt_YBd5KqI6aKwbPfMkFXAZPepxhqi9" title="[Sub español] RUN BTS 2018 - EP. 55" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <iframe width="759" height="427" src="https://www.youtube.com/embed/RIBC0PX0bg4" title="Run BTS! 2018 EP.41 - 방탄 골든벨 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>

      <h2 className={styles.subtitulo}>Noticias</h2>
      <p className={styles.descripcion}>
        Algunas noticias recientes que sucedieron.
      </p>
      <div className={styles.videosContainer}>
        <iframe width="759" height="427" src="https://www.youtube.com/embed/RN_89bFfH6Y" title="¿Qué pasó con SUGA de BTS?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <iframe width="759" height="427" src="https://www.youtube.com/embed/yzLINQw6_K0" title="‼ÚLTIMA ACTUALIZACIÓN de Suga en el Servicio Militar, ¿Cómo está y qué está haciendo?‼" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <iframe width="759" height="427" src="https://www.youtube.com/embed/dy4b2ecKaiY" title="Jennie y Rosé Afectadas por Escándalo de Suga BTS + Blackpink vs Army?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
    </div>
  );
}

export default Videos;
