import { useState } from "react";
import Footer from "./Footer/Footer";
import "../styles/App.scss";
import ControlledLottie from "./ControlledLottie";
import Header from "./Header/Header";
import Main from "./Main.js/Main";

function App() {
  //STATES
  const [textBasicColor, setTextBasicColor] = useState("textColorWhite");
  const [backgroundToggle, setBackgroundToggle] = useState("backgroundBlack");
  const [photoColor, setPhotoColor] = useState("bn");
  const [borderText, setBorderText] = useState("");
  //who i am
  const [backgroundImageWhoIAm, setBackgroundImageWhoIAm] = useState("");
  //manejadores del Nav
  const [navGradient, setNavGradient] = useState("navGradientDark");
  const [navShadow, setNavShadow] = useState("shadowOn");
  //landing
  const [backgroundImageHello, setBackgroundImageHello] = useState("");
  const [paragraphColor, setParagraphColor] = useState("");
  const [backgroundFooter, setBackgroundFooter] = useState("");
  const [textSmiley, setTextSmiley] = useState("colored");

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
      setBackgroundImageWhoIAm("backgroundImageWhoIAm");
      setTextSmiley("dark");
    } else {
      console.log("cambio a negro");
      setBackgroundToggle("backgroundBlack");
      setPhotoColor("bn");
      setBorderText("");
      setBackgroundImageWhoIAm("");
      setNavGradient("navGradientDark");
      setTextBasicColor("textColorWhite");
      setNavShadow("shadowOn");
      setBackgroundImageHello("");
      setParagraphColor("");
      setBackgroundFooter("");
      setBackgroundImageWhoIAm("");
      setTextSmiley("colored");
    }
  };
  return (
    <div className={`body ${textBasicColor} ${backgroundToggle}`}>
      <Header
        textSmiley={textSmiley}
        navShadow={navShadow}
        textBasicColor={textBasicColor}
        backgroundImageHello={backgroundImageHello}
        navGradient={navGradient}
        borderText={borderText}
        toggleMode={toggleMode}
      />
      <Main
        photoColor={photoColor}
        backgroundImageWhoIAm={backgroundImageWhoIAm}
      />

      <Footer
        backgroundFooter={backgroundFooter}
        textBasicColor={textBasicColor}
        paragraphColor={paragraphColor}
        toggleMode={toggleMode}
      />
    </div>
  );
}

export default App;
