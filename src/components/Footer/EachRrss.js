const EachRrss = (props) => {
  return (
    <li className="footer__rrss--li">
      <a
        className={`footer__rrss--li link ${props.textBasicColor}`}
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        <span className={`footerText ${props.textBasicColor}`}>
          {props.rrss}
        </span>
      </a>
    </li>
  );
};

export default EachRrss;
