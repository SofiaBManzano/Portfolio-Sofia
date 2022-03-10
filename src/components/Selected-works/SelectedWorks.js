import anonymusProxy from "../../images/anonymus-proxy.jpg";
import harryPotter from "../../images/harry-potter.jpg";
import hangman from "../../images/ahorcado.jpg";
import otaku from "../../images/otaku-search.jpg";
import superPop from "../../images/super-pop.jpg";

const SelectedWorks = (props) => {
  return (
    <article className="selectedWorks" id="work">
      {/* Aqui mas adelante haré un hover en la imagen donde pasando el ratón por encima se verá la description */}
      <h2 className="selectedWorks__title">selected works</h2>
      <ul className="selectedWorks__container">
        <li className="selectedWorks__container--li right">
          <h3 className="selectedWorks__container--li title">Anonymus Proxy</h3>{" "}
          <div>
            <p className="selectedWorks__container--li description">
              //This is my first "hello world", that is, my first responsive
              website and my first approach to web layout. Made entirely with
              HTML and Sass.
            </p>
            <a
              className="selectedWorks__container--li img-container"
              target="blank"
              href="https://sofiabmanzano.github.io/Anonymus-proxy/"
            >
              <img
                className={`selectedWorks__container--li li__img--${props.photoColor}`}
                src={anonymusProxy}
                alt="anonymusProxy"
              />
            </a>
          </div>
        </li>
        <li className="selectedWorks__container--li">
          <h3 className="selectedWorks__container--li title">
            Harry Potter Character Finder
          </h3>
          <div>
            {" "}
            <p className="selectedWorks__container--li description">
              //Responsive search engine for Harry Potter characters developed
              in React using an external API.
            </p>
            <a
              target="blank"
              href="https://sofiabmanzano.github.io/Buscador-Harry-Potter---React/#/"
            >
              <img
                className={`selectedWorks__container--li li__img--${props.photoColor}`}
                src={harryPotter}
                alt="harryPotter"
              />
            </a>
          </div>
        </li>
        <li className="selectedWorks__container--li right">
          <h3 className="selectedWorks__container--li title">Hangman Game</h3>
          <div>
            {" "}
            <p className="selectedWorks__container--li description">
              //The well-known game that we have all played in class hiding from
              the teacher, made with React and a lot of love.
            </p>
            <a
              className="selectedWorks__container--li img-container"
              target="blank"
              href="https://sofiabmanzano.github.io/hangman-game/#/"
            >
              <img
                className={`selectedWorks__container--li li__img--${props.photoColor}`}
                src={hangman}
                alt="hangman-game"
              />
            </a>
          </div>
        </li>
        <li className="selectedWorks__container--li ">
          <h3 className="selectedWorks__container--li title">Otaku search</h3>
          <div>
            <p className="selectedWorks__container--li description">
              //Responsive anime series search engine developed in vanilla
              javascript using an external API.
            </p>
            <a
              target="blank"
              href="https://sofiabmanzano.github.io/Buscador-series-anime-Javascript-Vanilla/"
            >
              <img
                className={`selectedWorks__container--li li__img--${props.photoColor}`}
                src={otaku}
                alt="otaku-search"
              />
            </a>
          </div>
        </li>
        <li className="selectedWorks__container--li right">
          <h3 className="selectedWorks__container--li title">Super Pop!</h3>
          <div className="container__hover">
            <p className="selectedWorks__container--li description">
              //Group project. Responsive interactive website for creating
              cards. Made with javascript, HTML, Sass, Local Storage.
            </p>
            <a
              className="selectedWorks__container--li img-container"
              target="blank"
              href="https://sofiabmanzano.github.io/Super-Pop-/"
            >
              <img
                className={`selectedWorks__container--li li__img--${props.photoColor}`}
                src={superPop}
                alt="superPop"
              />
            </a>
          </div>
        </li>
      </ul>
    </article>
  );
};
export default SelectedWorks;
