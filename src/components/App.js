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
  const [textBasicColor, setTextBasicColor] = useState("");
  const [backgroundToggle, setBackgroundToggle] = useState("");
  const [photoColor, setPhotoColor] = useState("bn");
  const [colorText, setColorText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [navColored, setNavColored] = useState("bnNav");
  const handleClick = (ev) => {
    ev.preventDefault();
    if (textBasicColor === "") {
      setTextBasicColor("colored");
      setPhotoColor("photoColor");
      setColorText("coloredText");
      setBackgroundColor("backgroundColor");
      setBackgroundImage("backgroundImage");
      setNavColored("navColored");
      setBackgroundToggle("backgroundWhite");
    } else {
      setTextBasicColor("");
      setPhotoColor("bn");
      setColorText("");
      setBackgroundColor("");
      setNavColored("bnNav");
      setBackgroundToggle("");
    }
    // props.textBasicColor;
  };
  return (
    <div className={`body ${textBasicColor} ${backgroundToggle}`}>
      <header>
        <UnderConstruction />
        <Nav textBasicColor={textBasicColor} navColored={navColored} />
        <WhoIAm colorText={colorText} />
      </header>

      <SelectedWorks photoColor={photoColor} />

      <AboutMe backgroundColor={backgroundColor} />

      <Contact backgroundImage={backgroundImage} />
      <Footer handleClick={handleClick} />
    </div>
  );
}

export default App;
