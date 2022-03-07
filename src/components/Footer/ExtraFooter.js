const ExtraFooter = (props) => {
  const handleClick = (ev) => {
    ev.preventDefault();
    props.toggleMode();
  };
  return (
    <ul className={`footer__extra ${props.backgroundFooter}`}>
      <li className="footer__extra--text">
        <button
          className={`footer__extra--text btn ${props.paragraphColor}`}
          onClick={handleClick}
        >
          colored version
        </button>
      </li>
      <li className="footer__extra--text ">
        <a
          className={`footer__extra--text link ${props.paragraphColor}`}
          href="#header"
        >
          back to top
        </a>
      </li>
    </ul>
  );
};
export default ExtraFooter;
