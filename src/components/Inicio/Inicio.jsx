import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardSubtitle, UncontrolledCarousel } from 'reactstrap';
import styles from './Inicio.module.css';

function Inicio() {
  return (
    <div className={styles['inicio-container']}>
      <header className={styles['inicio-header']}>
        <h1>Suga: Inspiración y Arte</h1>
      </header>

      <main className={styles['inicio-main']}>
        <section>
          <h2 className={styles['titulo-centro']}>Bienvenido</h2>
          <p className={styles['texto-grande']}>
            𝘌𝘴𝘵𝘢 𝘱á𝘨𝘪𝘯𝘢 𝘦𝘴𝘵á 𝘥𝘦𝘥𝘪𝘤𝘢𝘥𝘢 𝘢 𝘚𝘶𝘨𝘢, 𝘶𝘯 𝘢𝘳𝘵𝘪𝘴𝘵𝘢 𝘮𝘶𝘭𝘵𝘪𝘧𝘢𝘤é𝘵𝘪𝘤𝘰, 𝘱𝘳𝘰𝘥𝘶𝘤𝘵𝘰𝘳 𝘺 𝘮𝘪𝘦𝘮𝘣𝘳𝘰 𝘥𝘦 𝘉𝘛𝘚. 𝘈𝘲𝘶í 𝘦𝘯𝘤𝘰𝘯𝘵𝘳á𝘴 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪ó𝘯 𝘴𝘰𝘣𝘳𝘦 𝘴𝘶 𝘮ú𝘴𝘪𝘤𝘢, 𝘴𝘶 𝘩𝘪𝘴𝘵𝘰𝘳𝘪𝘢 𝘺 𝘦𝘭 𝘪𝘮𝘱𝘢𝘤𝘵𝘰 𝘲𝘶𝘦 𝘩𝘢 𝘵𝘦𝘯𝘪𝘥𝘰 𝘦𝘯 𝘮𝘪𝘭𝘭𝘰𝘯𝘦𝘴 𝘥𝘦 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘴 𝘢𝘭𝘳𝘦𝘥𝘦𝘳𝘰 𝘥𝘦𝘭 𝘮𝘶𝘯𝘥𝘰.
          </p>
          <p className={styles['texto-grande']}>
            𝘌𝘹𝘱𝘭𝘰𝘳𝘢 𝘴𝘶 𝘵𝘳𝘢𝘺𝘦𝘤𝘵𝘰𝘳𝘪𝘢 𝘤𝘰𝘮𝘰 𝘳𝘢𝘱𝘦𝘳𝘰 𝘺 𝘤𝘰𝘮𝘱𝘰𝘴𝘪𝘵𝘰𝘳, 𝘴𝘶 𝘤𝘰𝘯𝘦𝘹𝘪ó𝘯 𝘤𝘰𝘯 𝘭𝘰𝘴 𝘧𝘢𝘯𝘴, 𝘺 𝘴𝘶 𝘮𝘢𝘯𝘦𝘳𝘢 ú𝘯𝘪𝘤𝘢 𝘥𝘦 𝘦𝘹𝘱𝘳𝘦𝘴𝘢𝘳 𝘦𝘮𝘰𝘤𝘪𝘰𝘯𝘦𝘴 𝘢 𝘵𝘳𝘢𝘷é𝘴 𝘥𝘦𝘭 𝘢𝘳𝘵𝘦.
          </p>

          <div className={styles['carousel']}>
            <UncontrolledCarousel
              items={[
                {
                  altText: 'Concierto en Seúl',
                  caption: 'Un enérgico concierto en Seúl',
                  key: 1,
                  src: 'public/imagenes/Concierto.jpg'
                },
                {
                  altText: 'Gira Mundial 2024',
                  caption: 'Gira Mundial 2024: Donde la música nunca se detiene',
                  key: 2,
                  src: 'public/imagenes/gira.jpg'
                },
                {
                  altText: 'Colaboración Épica',
                  caption: 'Colaboración épica con artistas internacionales',
                  key: 3,
                  src: 'public/imagenes/colaborac.jpg'
                },
                {
                  altText: 'Concierto en Seul',
                  caption: 'El público de Seul vibró con cada nota',
                  key: 4,
                  src: 'public/imagenes/seul.jpg'
                },
                {
                  altText: 'Gira de Verano 2024',
                  caption: 'El verano fue nuestra gira más inolvidable',
                  key: 5,
                  src: 'public/imagenes/veran.jpg'
                },
                {
                  altText: 'Una noche en los Grammy',
                  caption: 'Una noche para recordar: Grammy 2024',
                  key: 6,
                  src: 'public/imagenes/gramm.jpg'
                }
              ]}
            />
          </div>

        </section>

        <section>
          <div className={styles['inicio-cardS']}>
            <h3 className={styles['titulo-centro']}>¿QUIEN ES SUGA DE BTS?</h3>
            <Card>
              <CardBody>
                <CardText className={styles['texto-grande']}>
                  Min Yoon-gi, conocido como Suga, es un rapero, compositor y productor surcoreano. Nacido el 9 de marzo de 1993, 
                  se unió a BTS en 2013 como uno de los raperos principales. Es conocido por sus letras profundas y honestas, 
                  que a menudo tratan temas como la salud mental, los sueños y la sociedad. Su mixtape en solitario, *Agust D*, 
                  demuestra su habilidad para mezclar géneros y explorar nuevos sonidos.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </section>

        <section>
          <h3 className={styles['titulo-centro']}>CONOCE A LOS INTEGRANTES DE BTS</h3>
          <h3 className={styles['titulo-centro']}>"Bangtan Sonyeondan"</h3>

          <div className={styles['inicio-cards-container']}>
            <div className={styles['inicio-card']}>
              <Card style={{ width: '18rem' }}>
                <img alt="RM" src="public/imagenes/RM.webp" />
                <CardBody>
                  <CardTitle tag="h5">RM</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Líder y rapero principal
                  </CardSubtitle>
                  <CardText>
                    RM, cuyo verdadero nombre es Kim Nam-joon, es conocido por su liderazgo en el grupo y su destreza lírica.
                  </CardText>
                </CardBody>
              </Card>
            </div>

            <div className={styles['inicio-card']}>
              <Card style={{ width: '18rem' }}>
                <img alt="Jin" src="public/imagenes/Jin.jpg" />
                <CardBody>
                  <CardTitle tag="h5">Jin</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Visual y vocalista principal
                  </CardSubtitle>
                  <CardText>
                    Jin, cuyo nombre real es Kim Seok-jin, es el visual del grupo y uno de los vocalistas principales.
                  </CardText>
                </CardBody>
              </Card>
            </div>

            <div className={styles['inicio-card']}>
              <Card style={{ width: '18rem' }}>
                <img alt="J-Hope" src="public/imagenes/hope.jpg" />
                <CardBody>
                  <CardTitle tag="h5">J-Hope</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Rapero principal y bailarín
                  </CardSubtitle>
                  <CardText>
                    J-Hope, o Jung Ho-seok, es conocido por su energía positiva, su habilidad en el baile y su versatilidad.
                  </CardText>
                </CardBody>
              </Card>
            </div>

            <div className={styles['inicio-card']}>
              <Card style={{ width: '18rem' }}>
                <img alt="V" src="public/imagenes/V.jpg" />
                <CardBody>
                  <CardTitle tag="h5">V</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Vocalista y visual
                  </CardSubtitle>
                  <CardText>
                    V, cuyo verdadero nombre es Kim Tae-hyung, es conocido por su distintiva voz y su presencia única en el escenario.
                  </CardText>
                </CardBody>
              </Card>
            </div>

            <div className={styles['inicio-card']}>
              <Card style={{ width: '18rem' }}>
                <img alt="Jimin" src="public/imagenes/Jimin.jpg" />
                <CardBody>
                  <CardTitle tag="h5">Jimin</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Vocalista principal y bailarín
                  </CardSubtitle>
                  <CardText>
                    Jimin es conocido por su increíble habilidad vocal por su voz suave, su carisma y su estilo de baile único que destaca en su complejidad y presicion.
                  </CardText>
                </CardBody>
              </Card>
            </div>

            <div className={styles['inicio-card']}>
              <Card style={{ width: '18rem' }}>
                <img alt="Suga" src="public/imagenes/SG.jpg" />
                <CardBody>
                  <CardTitle tag="h5">Suga</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Rapero y productor
                  </CardSubtitle>
                  <CardText>
                    Suga, cuyo verdadero nombre es Min Yoon-gi, es reconocido por su habilidad como rapero y productor musical, aportando una gran profundidad emocional a las canciones de BTS.
                  </CardText>
                </CardBody>
              </Card>
            </div>

            <div className={styles['inicio-card']}>
              <Card style={{ width: '18rem' }}>
                <img alt="Jungkook" src="public/imagenes/Jun.jpg" />
                <CardBody>
                  <CardTitle tag="h5">Jungkook</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Vocalista principal, maknae
                  </CardSubtitle>
                  <CardText>
                    Jungkook, conocido como el "maknae" de BTS eso se debe a que es el integrante mas joven del grupo por lo cual esa denominacion, es un talentoso cantante, bailarín y compositor.
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Inicio;
