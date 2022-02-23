const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer__rrss">
          <li className="footer__rrss--li">
            <a
              className="footer__rrss--li link"
              href="https://github.com/SofiaBManzano"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </li>
          <li className="footer__rrss--li">
            <a
              className="footer__rrss--li link"
              href="https://www.linkedin.com/in/sofiablas/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </li>
          <li className="footer__rrss--li">
            <a
              className="footer__rrss--li link"
              href="https://www.instagram.com/sofiabmanzano/?hl=es"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </li>
          <li className="footer__rrss--li">
            <a
              className="footer__rrss--li link"
              href="https://vimeo.com/311440378"
              target="_blank"
              rel="noreferrer"
            >
              reel
            </a>
          </li>
        </ul>
      </nav>
      <ul className="footer__extra">
        <li className="footer__extra--text">colored version</li>
        <li className="footer__extra--text">
          <a className="footer__extra--text link" href="#header">
            back to top
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
