const Contact = (props) => {
  return (
    <section className="contact" id="contact">
      <p className="contact__text">
        If you think that a profile like mine can fit you,
      </p>
      <p className="contact__text--talk ">
        <a
          className="contact__text--talk link hover-underline-animation"
          href="mailto:sofiabmanzano@gmail.com?subject=Let's Talk"
        >
          let's talk
        </a>
      </p>
    </section>
  );
};

export default Contact;
