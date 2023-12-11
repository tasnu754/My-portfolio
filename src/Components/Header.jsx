import { useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

// https://i.ibb.co/f2wj0WV/Neon-Blue-and-Black-Gamer-Badge-Logo.png 
// https://i.ibb.co/cYKJ5Dg/Web-Developer-Illustration-Facebook-Post.png


const Header = () => {
    useEffect(() => {
    
    var typed = new Typed(".text", {
      strings: ["Frontend Developer", "Mern Stack Developer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []); 
  return (
    <div className="relative lg:flex gap-24 items-center w-full lg:h-[100vh] ">
      <div className="lg:max-w-[700px] space-y-4">
        <h3 className="text-2xl">Hello, It&apos;s me</h3>
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-4xl font-bold text-[#0ef]"
        >
          Tasnuva Islam Mila
        </h1>
        <h3 className="text-2xl">
          And I&apos;m a <span className="text text-[#0ef]"></span>
        </h3>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fuga
          accusamus, voluptates exercitationem optio reiciendis architecto vitae
          mollitia quos, tenetur aliquid. Quae quasi nihil, dolorem repellendus
          molestias numquam eaque nesciunt?
        </p>

        <div
          data-aos="fade-left"
          className="flex justify-start items-center gap-2 text-2xl transparent "
        >
          <a
            href="#"
            className="w-[45px] h-[45px]  flex justify-center items-center rounded-full border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
          >
            <FaFacebookF></FaFacebookF>
          </a>
          <a
            href="#"
            className="w-[45px] h-[45px] flex justify-center items-center rounded-full border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
          >
            <FaLinkedinIn></FaLinkedinIn>
          </a>
          <a
            href="#"
            className=" w-[45px] h-[45px] flex justify-center items-center rounded-full border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
          >
            <SiInstagram></SiInstagram>
          </a>
        </div>
        <div className="pt-2">
          <button className="btn-nav ">Resume</button>
        </div>
      </div>
      <div className="w-[250px] h-[250px] mx-auto my-10 md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/f2wj0WV/Neon-Blue-and-Black-Gamer-Badge-Logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
