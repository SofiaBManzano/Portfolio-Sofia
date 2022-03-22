import Description from "./Description";
import Hello from "./Hello";
import Smile from "./Smile";

const WhoIAm = (props) => {
  return (
    <aside className={`container ${props.backgroundImageHello}`}>
      <section>
        <Hello borderText={props.borderText} />
        <Smile toggleMode={props.toggleMode} textSmiley={props.textSmiley} />
      </section>
      <section>
        <Description textBasicColor={props.textBasicColor} />
      </section>
    </aside>
  );
};
export default WhoIAm;
