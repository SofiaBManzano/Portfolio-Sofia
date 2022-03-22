import AboutMe from "./AboutMe";
import Contact from "./Contact";
import SelectedWorks from "./Selected-works/SelectedWorks";

const Main = (props) => {
  return (
    <main>
      <SelectedWorks photoColor={props.photoColor} />
      <AboutMe backgroundImageWhoIAm={props.backgroundImageWhoIAm} />
      <Contact />
    </main>
  );
};
export default Main;
