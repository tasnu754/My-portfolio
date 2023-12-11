import AboutMe from "./AboutMe";
import Education from "./Education";
import Header from "./Header";
import Navbar from "./Navbar";

const Home = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="w-[90%] lg:w-[80%] mx-auto pb-10">
          <Header></Header>
                <AboutMe></AboutMe>
                <Education></Education>
        </div>
      </div>
    );
};

export default Home;