const EachWork = (props) => {
  return (
    <li className={`selectedWorks__container--li ${props.classRight}`}>
      <h3 className="selectedWorks__container--li title">{props.title}</h3>
      <div>
        <p className="selectedWorks__container--li description">
          {props.description}
        </p>
        <a
          className="selectedWorks__container--li img-container"
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
