const EachWork = (props) => {
  return (
    <li className={`selectedWorks__container--li ${props.classRight}`}>
      <h3 className="selectedWorks__container--li title">{props.title}</h3>
      <div>
        <p className="selectedWorks__container--li description">
          {props.description}
        </p>
        <div className={props.image}>
          <a
            className="selectedWorks__container--li img-container"
            target="blank"
            href={props.href}
          />
        </div>
        <a
          className="selectedWorks__container--li img-container"
          target="blank"
          href={props.href}
        >
          <img
            className={`selectedWorks__container--li li__img--${props.photoColor}`}
            src={props.img}
            alt="anonymusProxy"
          />
        </a>
      </div>
    </li>
  );
};
export default EachWork;
