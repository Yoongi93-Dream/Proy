import React from 'react';
import styles from './CD.module.css';

function Colaboraciones() {
  return (
    <div className={styles['cd-container']}>
      <h1 className={styles.titulo}>Colaboraciones de Suga</h1>
      <p className={styles.descripcion}>
        Suga no solo brilla como solista y miembro de BTS, sino que también ha dejado su huella trabajando con una variedad de artistas. Sus colaboraciones destacan por su creatividad, versatilidad y su capacidad de fusionar géneros. Aquí algunas de las más destacadas.
      </p>
      <div className={styles.colaboraciones}>
        {/* Colaboraciones individuales */}
        <div className={styles.colaboracion}>
          <h2 className={styles.subtitulo}>*Song Request* con Lee Sora</h2>
          <p>Año: 2019</p>
          <p>
            Una colaboración emocional que combina la voz melódica de Lee Sora con el rap introspectivo de Suga. La canción trata sobre el anhelo y la soledad.
          </p>
        </div>
        
        <div className={styles.colaboracion}>
          <h2 className={styles.subtitulo}>*Blueberry Eyes* con MAX</h2>
          <p>Año: 2020</p>
          <p>
            Una colaboración vibrante y romántica, donde Suga aporta versos en coreano que complementan perfectamente la energía de MAX. Es un éxito global que celebra el amor.
          </p>
        </div>

        <div className={styles.colaboracion}>
          <h2 className={styles.subtitulo}>*Eight* con IU</h2>
          <p>Año: 2020</p>
          <p>
            Una colaboración conmovedora con IU, donde Suga participa en la composición, producción y rap. La canción toca temas de nostalgia y el paso del tiempo, con un enfoque en la relación entre los recuerdos y el futuro.
          </p>
        </div>

        <div className={styles.colaboracion}>
          <h2 className={styles.subtitulo}>*Wine* con Changmo</h2>
          <p>Año: 2020</p>
          <p>
            Suga colabora con el rapero surcoreano Changmo en esta canción que presenta un estilo más relajado y elegante, con un toque suave de rap y R&B.
          </p>
        </div>

        <div className={styles.colaboracion}>
          <h2 className={styles.subtitulo}>*Lilith* con Halsey</h2>
          <p>Año: 2020</p>
          <p>
            Una colaboración destacada con Halsey, que aparece en el álbum *Manic* de la cantante estadounidense. "Lilith" es una canción poderosa que toca temas de empoderamiento y lucha interna, con Suga aportando sus raps para complementar la atmósfera emocional de la canción.
          </p>
        </div>

        <div className={styles.colaboracion}>
          <h2 className={styles.subtitulo}>*Strange* con RM (BTS)</h2>
          <p>Año: 2020</p>
          <p>
            Una colaboración con su compañero de BTS, RM, que forma parte del mixtape *D-2* de Suga. La canción tiene una mezcla de hip-hop y rap con letras filosóficas y de introspección.
          </p>
        </div>

        {/* Colaboraciones con artistas internacionales */}
        <div className={styles.colaboracion}>
          <h2 className={styles.subtitulo}>*Make It Right* con Lauv</h2>
          <p>Año: 2019</p>
          <p>
            La canción fue parte del álbum *Map of the Soul: Persona* de BTS, donde Suga trabajó junto al cantante Lauv. El tema mezcla pop y rock con un toque emocional en la letra.
          </p>
        </div>

        <div className={styles.colaboracion}>
          <h2 className={styles.subtitulo}>*Waste It On Me* con Steve Aoki</h2>
          <p>Año: 2018</p>
          <p>
            Una colaboración con el DJ y productor estadounidense Steve Aoki. La canción es un tema dance-pop con el distintivo toque de Suga, quien le da su sello personal a través de su rap en coreano.
          </p>
        </div>

        {/* Colaboraciones con artistas coreanos */}
        <div className={styles.colaboracion}>
          <h2 className={styles.subtitulo}>*Daydream* con Kim Jong Kook</h2>
          <p>Año: 2018</p>
          <p>
            En esta colaboración, Suga se une al cantante de K-pop Kim Jong Kook para crear un tema que combina los géneros del pop y el rap, destacando las armonías vocales junto con el rap de Suga.
          </p>
        </div>

        <div className={styles.colaboracion}>
          <h2 className={styles.subtitulo}>*Honsool* con Sumin</h2>
          <p>Año: 2023</p>
          <p>
            En el mixtape *D-Day*, Suga colabora con la cantante y rapera Sumin en la canción *Honsool*, una pista que mezcla elementos de R&B y rap, con letras que exploran temas de amor y reflexión.
          </p>
        </div>
        
        <div className={styles.colaboracion}>
          <h2 className={styles.subtitulo}>*I’m Fine* con Suga</h2>
          <p>Año: 2023</p>
          <p>
            Una colaboración introspectiva en la que Suga y su colega cantante de K-pop muestran la lucha interna por mantenerse optimista ante las dificultades de la vida.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Colaboraciones;
