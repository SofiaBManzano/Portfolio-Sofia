import Nav from "./Nav";
import UnderConstruction from "./UnderConstruction";
import Landing from "./Landing/Landing";
const Header = (props) => {
  return (
    <header>
      <UnderConstruction />
      <Nav
        navShadow={props.navShadow}
        textBasicColor={props.textBasicColor}
        navGradient={props.navGradient}
      />
      <Landing
        toggleMode={props.toggleMode}
        textSmiley={props.textSmiley}
        backgroundImageHello={props.backgroundImageHello}
        borderText={props.borderText}
        textBasicColor={props.textBasicColor}
      />
    </header>
  );
};
export default Header;
