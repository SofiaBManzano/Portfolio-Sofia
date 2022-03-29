const Video = () => {
  return (
    <article className="video">
      <p className="video__text">
        If you are still curious and want to check out about what I was doing
        before reprogramming myself in front-end developer, here is my
        audiovisual reel
      </p>
      <div className="video__container">
        <iframe
          style={{
            border: "3px solid gray",
            borderRadius: "5px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
          className="video__container--content"
          src="https://player.vimeo.com/video/311440378?h=e5ab699e2f"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          //   allowFullScreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </article>
  );
};
export default Video;
