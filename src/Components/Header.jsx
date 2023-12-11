import { useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();


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
    <div className="relative flex justify-between items-center w-full h-[100vh] ">
      <div className="max-w-[600px] space-y-4">
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

        <div className="flex justify-start items-center gap-2 text-2xl transparent ">
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
      </div>
    </div>
  );
};

export default Header;
