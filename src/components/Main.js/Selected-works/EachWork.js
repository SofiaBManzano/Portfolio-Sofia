const EachWork = (props) => {
  return (
    <li className={`list ${props.classRight}`}>
      <h3 className="list__title">{props.title}</h3>
      <div className="list__container">
        <p className="list__container--description">{props.description}</p>
        <a
          className="list__container--img-container"
          target="blank"
          href={props.href}
        >
          <div className={props.image + props.photoColor}></div>
        </a>
      </div>
    </li>
  );
};
export default EachWork;
