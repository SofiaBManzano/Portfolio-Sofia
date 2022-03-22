const AboutMe = (props) => {
  return (
    <section className={`aboutMe ${props.backgroundImageWhoIAm}`} id="aboutMe">
      <h1 className="aboutMe__title">Who am I?</h1>
      <article className="aboutMe__container">
        <div className="aboutMe__container--img"></div>
        <p className="aboutMe__container--text one">
          I'm a junior front-end developer with an extense background in video
          editing and post-production. For 4 years I was working in a small
          audiovisual production company, taking care of the editing and
          post-production of each video, knowing how to adapt to tight deadlines
          and all kinds of clients.
        </p>
        <p className="aboutMe__container--text three">
          {" "}
          Even though it was out of the IT world, it was also a continuously
          changing sector where I had to adapt by learning other technologies
          such as 3D design and motion graphics. I consider myself a person with
          great adaptation to the needs of each project. In addition, having
          worked as a freelancer has been very rewarding. I have been able to
          work on projects that I was passionate about and where I had more
          freedom to apply the creativity that characterizes me.{" "}
        </p>
        <p className="aboutMe__container--text three">
          {" "}
          For me, everything related to design and art is the world that I am
          passionate about.
        </p>{" "}
        <p className="aboutMe__container--text four">
          {" "}
          In my free time I like to do analogue photography, just as a hobby, my
          "evil" side is finding the best taverns and bars to eat and drink in
          Madrid. Have I already mentioned that I have also been a waitress?
        </p>
        <p className="aboutMe__container--text .one5">
          {" "}
          I decided to take a slight turn in my direction to bet on web
          development because if there is something that I have always been
          clear about, it is that I want to work with a computer and that, along
          with my abilities and skills in terms of art, having been curious and
          self-taught and the great adaptability to new technologies, could
          bring my potential to its maximum in web development.
        </p>
      </article>
    </section>
  );
};
export default AboutMe;
