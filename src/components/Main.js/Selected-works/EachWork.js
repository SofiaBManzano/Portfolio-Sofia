const EachWork = (props) => {
  return (
    <li
      aos={props.aos}
      data-aos={props.dataAos}
      data-aos-delay="70"
      data-aos-duration="700"
      className={`list ${props.classRight}`}
    >
      <h3 className="list__title">{props.title}</h3>
      <div className={`list__container ${props.classRight}`}>
        <p className={`${props.classRight} list__container--description`}>
          {props.description}
        </p>
        <a
          className="list__container--img-container "
          target="blank"
          href={props.href}
        >
          <div className="c-list__content">
            <img
              className="c-list__content--img"
              src="https://cdn.create-store.com/wk/img/core/ikh/editorial/fresh/fresh-1-v2-desktop.jpg?v=1655119912"
            ></img>
          </div>
        </a>
      </div>
    </li>
  );
};
export default EachWork;
