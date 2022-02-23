// import "../styles/Nav.scss";
const Nav = () => {
  return (
    <nav className="nav" id="header">
      <ul className="nav__container">
        <li className="nav__container--title">
          <a className="nav__container--title link" href="#work">
            work
          </a>
        </li>
        <li className="nav__container--title">
          <a className="nav__container--title link" href="#contact">
            contact
          </a>
        </li>
        <li className="nav__container--title">
          <a className="nav__container--title link" href="#aboutMe">
            about me
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
