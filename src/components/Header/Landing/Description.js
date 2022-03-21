const Description = (props) => {
  return (
    <article className="whoIAm">
      <p className={`whoIAm__text ${props.textBasicColor}`}>
        //I'm a junior front-end developer in search for my first job
        opportunity.
      </p>
      <p className={`whoIAm__text ${props.textBasicColor}`}>
        //My goal is to continue learning and gaining knowledge to bring my
        potential to its fullest in web development.
      </p>
    </article>
  );
};

export default Description;
