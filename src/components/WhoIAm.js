// import "../styles/WhoIAm.scss";
const WhoIAm = () => {
  return (
    <div className="container">
      <section className="me">
        <h1 className="me__name">Hello</h1>
        <h2 className="me__name">
          I am <span className="me__name--myName">Sofía</span>
        </h2>

        <ul className="me__positions">
          <li className="me__positions--job">Frontend developer</li>
          <li className="me__positions--job">Motion grapher</li>
          <li className="me__positions--job">Video editor</li>
        </ul>
      </section>

      <section className="whoIAm">
        <p className="whoIAm__text">
          //I'm a junior front-end developer looking for my first job
          opportunity.
        </p>
        <p className="whoIAm__text">
          //My goal is to continue learning and gaining knowledge to bring my
          potential to its fullest in web development.
        </p>
      </section>
    </div>
  );
};
export default WhoIAm;
