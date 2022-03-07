import ExtraFooter from "./ExtraFooter";
import Rrss from "./Rrss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <Rrss textBasicColor={props.textBasicColor} />

      <ExtraFooter
        backgroundFooter={props.backgroundFooter}
        paragraphColor={props.paragraphColor}
        toggleMode={props.toggleMode}
      />
    </footer>
  );
};
export default Footer;
