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
  const [dataColor, setDataColor] = useState("");
  const [photoColor, setPhotoColor] = useState("bn");
  const [colorText, setColorText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [navColored, setNavColored] = useState("bnNav");
  const handleClick = (ev) => {
    ev.preventDefault();
    if (dataColor === "") {
      setDataColor("colored");
      setPhotoColor("photoColor");
      setColorText("coloredText");
      setBackgroundColor("backgroundColor");
      setBackgroundImage("backgroundImage");
      setNavColored("navColored");
    } else {
      setDataColor("");
      setPhotoColor("bn");
      setColorText("");
      setBackgroundColor("");
      setNavColored("bnNav");
    }
    // props.dataColor;
  };
  return (
    <div className={`body ${dataColor}`}>
      <header>
        <UnderConstruction />
        <Nav navColored={navColored} />
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
