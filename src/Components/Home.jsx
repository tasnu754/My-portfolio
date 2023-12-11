import Header from "./Header";
import Navbar from "./Navbar";

const Home = () => {
    return (
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <Navbar></Navbar>
        <Header></Header>
      </div>
    );
};

export default Home;