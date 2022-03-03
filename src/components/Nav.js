// import "../styles/Nav.scss";
const Nav = (props) => {
  return (
    <nav className="nav" id="header">
      <ul className={`nav__container ${props.navColored}`}>
        <li className="nav__container--title ">
          <a
            className={`nav__container--title link ${props.textBasicColor}`}
            href="#work"
          >
            work
          </a>
        </li>
        <li className="nav__container--title">
          <a
            className={`nav__container--title link ${props.textBasicColor}`}
            href="#contact"
          >
            contact
          </a>
        </li>
        <li className="nav__container--title">
          <a
            className={`nav__container--title link ${props.textBasicColor}`}
            href="#aboutMe"
          >
            about me
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
