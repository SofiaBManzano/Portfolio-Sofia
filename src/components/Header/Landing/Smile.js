const Smile = (props) => {
  const handleClick = (ev) => {
    ev.preventDefault();
    props.toggleMode();
  };
  return (
    <article className="smile">
      <p className="smile__text">{`${props.textSmiley}`}</p>
      <div className="smile__face" onClick={handleClick}></div>
      <p className="smile__text">version</p>
    </article>
  );
};
export default Smile;
