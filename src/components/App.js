import { useState } from "react";

import UnderConstruction from "./UnderConstruction";
import Nav from "./Nav";
import WhoIAm from "./WhoIAm";
import SelectedWorks from "./SelectedWorks";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";

import "../styles/App.scss";

function App() {
  //STATES
  const [textBasicColor, setTextBasicColor] = useState("textColorWhite");
  const [backgroundToggle, setBackgroundToggle] = useState("backgroundBlack");
  const [photoColor, setPhotoColor] = useState("bn");
  const [colorText, setColorText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("backgroundBlack");
  const [backgroundImage, setBackgroundImage] = useState("");
  //manejadores del Nav
  const [navGradient, setNavGradient] = useState("navGradientDark");
  const [navShadow, setNavShadow] = useState("shadowOn");
  const handleClick = (ev) => {
    ev.preventDefault();
    toggleMode();
  };
  const toggleMode = () => {
    if (backgroundToggle === "backgroundBlack") {
      console.log("cambio a blanco");
      setBackgroundToggle("backgroundWhite");
      setTextBasicColor("textColorDark");
      setPhotoColor("bn");
      setColorText("");
      setBackgroundColor("");
      setNavGradient("navGradientLight");
      setTextBasicColor("textColorDark");
      setNavShadow("");
    } else {
      console.log("cambio a negro");
      setBackgroundToggle("backgroundBlack");
      setTextBasicColor("colored");
      setPhotoColor("photoColor");
      setColorText("coloredText");
      setBackgroundColor("backgroundColor");
      setBackgroundImage("backgroundImage");
      setNavGradient("navGradientDark");
      setTextBasicColor("textColorWhite");
      setNavShadow("shadowOn");
    }
  };
  return (
    <div className={`body ${textBasicColor} ${backgroundToggle}`}>
      <header>
        <UnderConstruction />
        <Nav
          navShadow={navShadow}
          textBasicColor={textBasicColor}
          navGradient={navGradient}
        />
        <WhoIAm colorText={colorText} />
      </header>

      <SelectedWorks photoColor={photoColor} />

      <AboutMe backgroundColor={backgroundColor} />

      <Contact backgroundImage={backgroundImage} />
      <Footer textBasicColor={textBasicColor} handleClick={handleClick} />
    </div>
  );
}

export default App;
