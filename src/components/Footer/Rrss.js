const Rrss = (props) => {
  return (
    <nav>
      <ul className="footer__rrss">
        <li className="footer__rrss--li">
          <a
            className={`footer__rrss--li link ${props.textBasicColor}`}
            href="https://github.com/SofiaBManzano"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </li>
        <li className="footer__rrss--li">
          <a
            className={`footer__rrss--li link ${props.textBasicColor}`}
            href="https://www.linkedin.com/in/sofiablas/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </li>
        <li className="footer__rrss--li">
          <a
            className={`footer__rrss--li link ${props.textBasicColor}`}
            href="https://www.instagram.com/sofiabmanzano/?hl=es"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
        </li>
        <li className="footer__rrss--li">
          <a
            className={`footer__rrss--li link ${props.textBasicColor}`}
            href="https://vimeo.com/311440378"
            target="_blank"
            rel="noreferrer"
          >
            reel
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Rrss;
