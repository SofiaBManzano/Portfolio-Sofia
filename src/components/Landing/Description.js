const Description = (props) => {
  return (
    <section className="whoIAm">
      <p className={`whoIAm__text ${props.paragraphColor}`}>
        //I'm a junior front-end developer in search for my first job
        opportunity.
      </p>
      <p className={`whoIAm__text ${props.paragraphColor}`}>
        //My goal is to continue learning and gaining knowledge to bring my
        potential to its fullest in web development.
      </p>
    </section>
  );
};

export default Description;
