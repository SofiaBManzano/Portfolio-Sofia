import Description from "./Description";
import Hello from "./Hello";
import Smile from "./Smile";
// import "../styles/WhoIAm.scss";
const WhoIAm = (props) => {
  return (
    <div className={`container ${props.backgroundImageHello}`}>
      <Hello borderText={props.borderText} />
      <Smile />
      <Description paragraphColor={props.paragraphColor} />
    </div>
  );
};
export default WhoIAm;
