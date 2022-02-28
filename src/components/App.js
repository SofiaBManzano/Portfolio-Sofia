import "../styles/App.scss";
import UnderConstruction from "./UnderConstruction";
import Nav from "./Nav";
import WhoIAm from "./WhoIAm";
import SelectedWorks from "./SelectedWorks";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
function App() {
  return (
    <div className="body">
      <header>
        <UnderConstruction />
        <Nav />
        <WhoIAm />
      </header>

      <SelectedWorks />

      <AboutMe />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
