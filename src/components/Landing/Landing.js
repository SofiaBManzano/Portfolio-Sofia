import Description from "./Description";
import Hello from "./Hello";

// import "../styles/WhoIAm.scss";
const WhoIAm = (props) => {
  return (
    <div className={`container ${props.backgroundImageHello}`}>
      <Hello borderText={props.borderText} />
      <Description paragraphColor={props.paragraphColor} />
    </div>
  );
};
export default WhoIAm;
