import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';
import styles from './Musica.module.css';

function Musica() {
  return (
    <div className={styles.musicaContainer}>
      <h1 className={styles.titulo}>Música de Suga</h1>
      <p className={styles.descripcion}>
        Suga, también conocido como Agust D, ha transformado la música moderna al fusionar el hip-hop con otros géneros y 
        temas profundamente personales. Su influencia no solo se limita al ámbito musical, sino que también inspira a las generaciones 
        jóvenes al abordar temas como la salud mental, el autodescubrimiento y la crítica social. Su habilidad como productor, rapero 
        y compositor lo posiciona como uno de los artistas más innovadores de su generación.
      </p>
      <p className={styles.descripcion}>
        Exploraremos su impacto en la industria, desde proyectos en solitario hasta colaboraciones globales, mostrando cómo su música ha tocado 
        corazones y ha creado conciencia sobre importantes temas sociales.
      </p>

      <div className={styles.tarjetas}>
        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>Agust D</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2016</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="Agust D Album" src="public/imagenes/2016.jpg" />
          <CardBody>
            <CardText>
              Este álbum marcó el inicio de su carrera en solitario bajo el alias Agust D. Combina poderosas letras con un estilo musical único.
            </CardText>
            <CardLink href="https://youtu.be/3Y_Eiyg4bfk">Escuchar</CardLink>
          </CardBody>
        </Card>


        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>Eight (con IU)</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2020</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="Collaboration with IU" src="public/imagenes/Eight.jpg" />
          <CardBody>
            <CardText>
              Una emotiva colaboración con IU que mezcla un sonido fresco y melancólico, capturando sentimientos de nostalgia y esperanza.
            </CardText>
            <CardLink href="https://youtu.be/TgOu00Mf3kI">Escuchar</CardLink>
          </CardBody>
        </Card>


        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>Trivia: Seesaw</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2018</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="Trivia Seesaw" src="public/imagenes/Trivia.jpg" />
          <CardBody>
            <CardText>
              Una de sus canciones más destacadas como solista en BTS, explorando las relaciones y el balance emocional a través de un estilo pop sofisticado.
            </CardText>
            <CardLink href="https://youtu.be/NC_Lo8nRqfA">Escuchar</CardLink>
          </CardBody>
        </Card>


        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>Wine (con Suran)</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2017</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="Wine - Suran Collaboration" src="public/imagenes/Wine.jpg" />
          <CardBody>
            <CardText>
              Una colaboración con la cantante Suran que destaca por su sonido relajante y emocional, ganadora de premios importantes en Corea del Sur.
            </CardText>
            <CardLink href="https://youtu.be/VtlLcP1_2pU">Escuchar</CardLink>
          </CardBody>
        </Card>



        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>Interlude: Shadow</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2020</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="Interlude: Shadow" src="public/imagenes/Shadow.jpg" />
          <CardBody>
            <CardText>
              Una canción introspectiva de su mixtape *D-2*, que aborda los miedos y las expectativas sobre el éxito.
            </CardText>
            <CardLink href="https://youtu.be/PV1gCvzpSy0">Escuchar</CardLink>
          </CardBody>
        </Card>
        

        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>Daechwita</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2020</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="Daechwita" src="public/imagenes/Daechwita.jpg" />
          <CardBody>
            <CardText>
              Una de sus canciones más emblemáticas de *D-2*, que mezcla hip-hop con elementos tradicionales de la música coreana.
            </CardText>
            <CardLink href="https://youtu.be/qGjAWJ2zWWI">Escuchar</CardLink>
          </CardBody>
        </Card>



        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>People</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2020</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="People" src="public/imagenes/People.webp" />
          <CardBody>
            <CardText>
              Una canción emotiva de *D-2*, que reflexiona sobre la relación con los demás y el impacto que las personas tienen en nuestras vidas.
            </CardText>
            <CardLink href="https://youtu.be/WVAkAJAUNno">Escuchar</CardLink>
          </CardBody>
        </Card>


        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>What Do You Think?</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2020</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="What Do You Think?" src="public/imagenes/What.jpg" />
          <CardBody>
            <CardText>
              Un tema poderoso de *D-2* con un sonido audaz, donde Suga expresa su perspectiva sobre las expectativas sociales.
            </CardText>
            <CardLink href="https://youtu.be/ndlqBiq2ll4">Escuchar</CardLink>
          </CardBody>
        </Card>


        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>Honsool</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2018</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="Honsool" src="public/imagenes/Daechwita.jpg" />
          <CardBody>
            <CardText>
              Parte de su colaboración en el álbum *Mono* con RM, que aborda el tema de la soledad y el consumo de alcohol como escape.
            </CardText>
            <CardLink href="https://youtu.be/h90ACL8hSwA">Escuchar</CardLink>
          </CardBody>
        </Card>



        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>First Love</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2016</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="First Love" src="public/imagenes/First.jpg" />
          <CardBody>
            <CardText>
              Una de las canciones más profundas de su mixtape *Agust D*, donde Suga habla de su amor por la música.
            </CardText>
            <CardLink href="https://youtu.be/S9ou2FCLWlQ">Escuchar</CardLink>
          </CardBody>
        </Card>


        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>The Last</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2016</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="The Last" src="public/imagenes/The L.jpg" />
          <CardBody>
            <CardText>
              Otro tema icónico de su mixtape debut, donde Suga reflexiona sobre su carrera y sus luchas internas.
            </CardText>
            <CardLink href="https://youtu.be/hIDm_gzOwYk">Escuchar</CardLink>
          </CardBody>
        </Card>



        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>Moonlight</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2020</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="Moonlight" src="public/imagenes/Moon.jpg" />
          <CardBody>
            <CardText>
              Una canción suave y melancólica de *D-2*, que toca temas de la vida nocturna y la vulnerabilidad.
            </CardText>
            <CardLink href="https://youtu.be/YZJYv5oWYEQ">Escuchar</CardLink>
          </CardBody>
        </Card>


        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>So Far Away</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2017</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="So Far Away" src="public/imagenes/So far.jpg" />
          <CardBody>
            <CardText>
              Una colaboración con la cantante Suran, que explora temas de amor y distancia emocional.
            </CardText>
            <CardLink href="https://youtu.be/T1E_pkE06Cg">Escuchar</CardLink>
          </CardBody>
        </Card>


        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>Burn It</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2020</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="Burn It" src="public/imagenes/Burn.jpg" />
          <CardBody>
            <CardText>
              Una colaboración con el rapero de hip-hop coreano, que presenta una mezcla de ritmos potentes y letras profundas.
            </CardText>
            <CardLink href="https://youtu.be/XuyQB5rr4oQ">Escuchar</CardLink>
          </CardBody>
        </Card>


        <Card className={styles.tarjeta}>
          <CardBody>
            <CardTitle className={styles.tituloTarjeta}>BTS Cypher Pt. 4</CardTitle>
            <CardSubtitle className={styles.subtituloTarjeta}>2016</CardSubtitle>
          </CardBody>
          <img className={styles.imagen} alt="BTS Cypher Pt. 4" src="public/imagenes/Cypher.webp" />
          <CardBody>
            <CardText>
              Una colaboración de Suga con otros miembros de BTS, conocida por su versatilidad lírica y producción energética.
            </CardText>
            <CardLink href="https://youtu.be/Od8BLS0huVU">Escuchar</CardLink>
          </CardBody>
        </Card>



      </div>
    </div>
  );
}

export default Musica;
