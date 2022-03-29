// import "../styles/Nav.scss";
const Nav = (props) => {
  return (
    <nav className="nav" id="header">
      <ul className={`nav__container ${props.navGradient}`}>
        <li className={`nav__container--title ${props.navShadow}`}>
          <a
            className={`nav__container--title link ${props.textBasicColor}`}
            href="#work"
          >
            <span className={`navText ${props.textBasicColor}`}>work</span>
          </a>
        </li>
        <li className="nav__container--title">
          <a
            className={`nav__container--title link ${props.textBasicColor}`}
            href="#contact"
          >
            <span className={`navText ${props.textBasicColor}`}>contact</span>
          </a>
        </li>
        <li className="nav__container--title">
          <a
            className={`nav__container--title link ${props.textBasicColor}`}
            href="#aboutMe"
          >
            <span className={`navText ${props.textBasicColor}`}>about me</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
