import EachWork from "./EachWork";
const SelectedWorks = (props) => {
  return (
    <section className="selectedWorks" id="work">
      {/* Aqui mas adelante haré un hover en la imagen donde pasando el ratón por encima se verá la description */}
      <h2 className="selectedWorks__title">selected works</h2>
      <ul className="selectedWorks__container">
        <EachWork
          image="img anonymus "
          classRight="right"
          title="Anonymous Proxy"
          description="//This is my first Hello world, that is, my first responsive website and my first approach to web layout. Made entirely with HTML and Sass."
          href="https://sofiabmanzano.github.io/Anonymus-proxy/"
          photoColor={props.photoColor}
        />
        <EachWork
          image="img harryPotter "
          title="Harry Potter Character Finder"
          description="//Responsive search engine for Harry Potter characters developed
          in React using an external API."
          href="https://sofiabmanzano.github.io/Buscador-Harry-Potter---React/#/"
          photoColor={props.photoColor}
        />

        <EachWork
          image="img hangman "
          classRight="right"
          title="Hangman Game"
          description="//The well-known game that we have all played in class hiding from
          the teacher, made with React and a lot of love."
          href="https://sofiabmanzano.github.io/hangman-game/#/"
          photoColor={props.photoColor}
        />
        <EachWork
          image="img otaku "
          title="Otaku search"
          description="//Responsive anime series search engine developed in vanilla
          javascript using an external API."
          href="https://sofiabmanzano.github.io/Buscador-series-anime-Javascript-Vanilla/"
          photoColor={props.photoColor}
        />

        <EachWork
          image="img superPop "
          classRight="right"
          title="Super Pop!"
          description="//Group project. Responsive interactive website for creating
          cards. Made with javascript, HTML, Sass, Local Storage."
          href="https://sofiabmanzano.github.io/Super-Pop-/"
          photoColor={props.photoColor}
        />
      </ul>
    </section>
  );
};
export default SelectedWorks;
