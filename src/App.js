import React from "react";
import "./scss/app.scss";
import AnimatedCursor from "react-animated-cursor";
import { Container } from "react-bootstrap";
import ReactTooltip from "react-tooltip";


function App() {
  return (
    <>
      <Container className="container containerG">

        <div className="clmn1">
          <h1>
            <ul className="c-rainbow">
              <li className="c-rainbow__layer c-rainbow__layer--red">Maremoto</li>
              <li className="c-rainbow__layer c-rainbow__layer--violet">
                Maremoto
              </li>
              <li className="c-rainbow__layer c-rainbow__layer--background">
                Maremoto
              </li>
              <li className="c-rainbow__layer c-rainbow__layer--blue">Maremoto</li>
              <li className="c-rainbow__layer c-rainbow__layer--green">Maremoto</li>
              <li className="c-rainbow__layer c-rainbow__layer--yellow">
                Maremoto
              </li>
              <li className="c-rainbow__layer c-rainbow__layer--orange">
                Maremoto
              </li>
            </ul>
          </h1>
          <div
            className="dots h2"
            data-tip="Dejé de escribir cuando hicieron de mi dolor<br/> un juego de palabras
            ininteligible,"
            data-background-color="#b23a3a"
            data-place="right"
          >
            <span className="cr">.</span>
            <span className="cr">.</span>
            <span className="cr">.</span>
          </div>
        </div>
        <div className="space1"></div>
        <div className="clmn2">
          <div
            className="dots h2"
            data-tip="luego de varias derrotas intenté llorar<br/> sólo para darme cuenta que
            me había quedado sin nada<br/>qué gritar más que vendavales y un fuego
            naciente "
            data-background-color="#c8b448"
            data-text-color="#191919"
          >
            <span className="cy">.</span>
            <span className="cy">.</span>
            <span className="cy">.</span>
          </div>
          <h2>
            debajo de mi
            <br /> costillar.
          </h2>
        </div>

        <div className="space2"></div>

        <div className="clmn3">
          <div
            className="dots h2"
            data-tip="seguí el incendio y me encerré en mis adentros<br/>para dominar
            ecuánimamente mis llamas."
            data-background-color="#a9c328"
            data-text-color="#191919"
            data-place="bottom"
          >
            <span className="cg">.</span>
            <span className="cg">.</span>
            <span className="cg">.</span>
          </div>
          <h2>
            Descalza, muda
            <br />y a ciegas
          </h2>
        </div>

       
        <div className="space3"></div>

        <div className="clmn4">
          <div
            className="dots h2"
            data-tip="De entre las cenizas y con mi último aliento<br/>me hice viento para
            poder cruzar, fría y en soledad, "
            data-background-color="#38b899"
            data-text-color="#191919"
            data-place="top"
          >
            <span className="cb">.</span>
            <span className="cb">.</span>
            <span className="cb">.</span>
          </div>
          <h2>la cordillera.</h2>
        </div>
        
        <div className="space4"></div>

        <div className="clmn5">
          <div
            className="dots h2"
            data-tip="hasta el fondo de lo que no entendí<br/>y me
            produjo miedo entre sudor y temblores."
            data-background-color="#26508f"
            data-place="bottom"
          >
            <span className="cdb">.</span>
            <span className="cdb">.</span>
            <span className="cdb">.</span>
          </div>
          <h2>
            Ya escogí
            <br />
            sumergirme
          </h2>
        </div>

        <div className="space5"></div>

        <div className="clmn6">
          <div
            className="dots h2"
            data-tip="a vivir en frases cortas hasta que me
            encontré,<br/>por fin, despojado de todo lo que me impidió<br/>ser una
            semilla;"
            data-background-color="#4a347e"
            data-place="bottom"
          >
            <span className="cm">.</span>
            <span className="cm">.</span>
            <span className="cm">.</span>
          </div>
          <h2>
            Ya me marché
            <br />
            lejos
          </h2>
        </div>

        <div className="space6"></div>

        <div className="clmn7">
          <div className="trnon"></div>
          <h2
            data-tip="Gracias por ver."
            data-background-color="#aa4396"
            data-place="right"
          >
            Ya conocí el silencio.
          </h2>
        </div>

        <div className="App">
          <AnimatedCursor color="200, 200, 200" />
        </div>

        <div className="footer">
          Copyright © 2021{" "}
          <a href="https://eldesernauta.com">eldesernauta.com</a>
        </div>

        <ReactTooltip
          clickable
          place="top"
          scrollHide
          multiline 
          delayShow={100}
        />
      </Container>
    </>
  );
}

export default App;
