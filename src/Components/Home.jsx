import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Education from "./Education";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="w-[90%]   mx-auto pb-10 scroll-smooth">
          <Header></Header>
          <AboutMe></AboutMe>
          <Education></Education>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
        </div>
      </div>
    );
};

export default Home;