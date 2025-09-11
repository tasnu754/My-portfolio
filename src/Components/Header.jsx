import { useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaDownload } from "react-icons/fa6";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import profilePic from "/profile-pic (4).png";

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
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      className="relative xl:flex gap-24 items-center w-full xl:h-[100vh] pt-10 "
      id="home"
    >
      <div className="xl:max-w-[700px] space-y-4">
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
          With expertise in React and Next.js. My skills also extend to the
          backend, where I&apos;m proficient with Node.js, Express.js, MongoDB,
          and MySQL. I have a strong foundation in building modern, responsive
          user interfaces.
        </p>

        <div
          data-aos="fade-left"
          className="flex justify-start items-center gap-2 text-2xl transparent "
        >
          <a
            href="https://www.facebook.com/tasnuva.islam4"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[45px] h-[45px]  flex justify-center items-center rounded-full border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
          >
            <FaFacebookF></FaFacebookF>
          </a>
          <a
            href="https://www.linkedin.com/in/tasnuva-islam-mila-2105462a4"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[45px] h-[45px] flex justify-center items-center rounded-full border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
          >
            <FaLinkedinIn></FaLinkedinIn>
          </a>
          <a
            href="https://github.com/tasnu754"
            target="_blank"
            rel="noopener noreferrer"
            className=" w-[45px] h-[45px] flex justify-center items-center rounded-full border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
          >
            <FiGithub></FiGithub>
          </a>
          <a
            href="https://www.instagram.com/tasnuva_islam754/"
            target="_blank"
            rel="noopener noreferrer"
            className=" w-[45px] h-[45px] flex justify-center items-center rounded-full border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
          >
            <SiInstagram></SiInstagram>
          </a>
        </div>
        <div className="pt-2">
          <a
            href="https://drive.google.com/uc?export=download&id=17wLfziaCMT50GQX_9RVoYrtp2bbZGiFn"
            download={"Tasnuva_Islam_Resume.pdf"}
          >
            <button className="btn-nav ">
              <FaDownload className="inline"></FaDownload> Download Resume
            </button>
          </a>
        </div>
      </div>
      <div className="w-[250px] h-[250px] mx-auto my-10 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={profilePic}
          alt=""
          // https://i.ibb.co/Jy1J7Td/profile-pic-4.png
          // https://i.ibb.co/f2wj0WV/Neon-Blue-and-Black-Gamer-Badge-Logo.png
        />
      </div>
    </div>
  );
};

export default Header;
