import { useState } from "react";

import UnderConstruction from "./Header/UnderConstruction";
import Nav from "./Header/Nav";
import Landing from "./Landing/Landing";
import SelectedWorks from "./Selected-works/SelectedWorks";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer/Footer";

import "../styles/App.scss";

function App() {
  //STATES
  const [textBasicColor, setTextBasicColor] = useState("textColorWhite");
  const [backgroundToggle, setBackgroundToggle] = useState("backgroundBlack");
  const [photoColor, setPhotoColor] = useState("bn");
  const [borderText, setBorderText] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  //manejadores del Nav
  const [navGradient, setNavGradient] = useState("navGradientDark");
  const [navShadow, setNavShadow] = useState("shadowOn");
  //who i am
  const [backgroundImageHello, setBackgroundImageHello] = useState("");
  const [paragraphColor, setParagraphColor] = useState("");
  const [backgroundFooter, setBackgroundFooter] = useState("");

  const toggleMode = () => {
    if (backgroundToggle === "backgroundBlack") {
      console.log("cambio a blanco");
      setBackgroundToggle("backgroundWhite");
      setPhotoColor("photoColor");
      setBorderText("borderText");
      setNavGradient("navGradientLight");
      setTextBasicColor("textColorDark");
      setNavShadow("");
      setBackgroundImageHello("backgroundImageHello");
      setParagraphColor("textColorWhite");
      setBackgroundFooter("backgroundBlack");
    } else {
      console.log("cambio a negro");
      setBackgroundToggle("backgroundBlack");
      setPhotoColor("bn");
      setBorderText("");
      setBackgroundImage("backgroundImage");
      setNavGradient("navGradientDark");
      setTextBasicColor("textColorWhite");
      setNavShadow("shadowOn");
      setBackgroundImageHello("");
      setParagraphColor("");
      setBackgroundFooter("");
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
        <Landing
          backgroundImageHello={backgroundImageHello}
          borderText={borderText}
          paragraphColor={paragraphColor}
        />
      </header>

      <SelectedWorks photoColor={photoColor} />

      <AboutMe />

      <Contact backgroundImage={backgroundImage} />
      <Footer
        backgroundFooter={backgroundFooter}
        textBasicColor={textBasicColor}
        paragraphColor={paragraphColor}
        // handleClick={handleClick}
        toggleMode={toggleMode}
      />
    </div>
  );
}

export default App;
