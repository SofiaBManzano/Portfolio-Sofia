import EachRrss from "./EachRrss";

const Rrss = (props) => {
  return (
    <nav>
      <ul className="footer__rrss">
        <EachRrss
          textBasicColor={props.textBasicColor}
          href="https://github.com/SofiaBManzano"
          rrss="github"
        />
        <EachRrss
          textBasicColor={props.textBasicColor}
          href="https://www.linkedin.com/in/sofiablas/"
          rrss="linkedin"
        />

        <EachRrss
          textBasicColor={props.textBasicColor}
          href="https://www.instagram.com/sofiabmanzano/?hl=es"
          rrss="instagram"
        />
      </ul>
    </nav>
  );
};
export default Rrss;
