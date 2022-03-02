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
  const handleClick = (ev) => {
    ev.preventDefault();
    if (dataColor === "") {
      setDataColor("colored");
      setPhotoColor("photoColor");
      setColorText("coloredText");
    } else {
      setDataColor("");
      setPhotoColor("bn");
      setColorText("");
    }
    // props.dataColor;
  };
  return (
    <div className={`body ${dataColor}`}>
      <header>
        <UnderConstruction />
        <Nav />
        <WhoIAm colorText={colorText} handleClick={handleClick} />
      </header>

      <SelectedWorks photoColor={photoColor} handleClick={handleClick} />

      <AboutMe />

      <Contact />
      <Footer handleClick={handleClick} />
    </div>
  );
}

export default App;
