
const Navbar = () => {
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="xl:fixed transparent xl:header z-10 p-4 mb-6 md:p-10 xl:w-full xl:px-40 shadow-md rounded-md border-none  lg:px-6 lg:flex justify-between "
      >
        <div>
          <a
            href="#"
            className=" mr-10 xl:mr-[400px] relative text-[#fff] text-2xl font-bold"
          >
            Tasnuva
          </a>
        </div>

        <nav className="space-x-4 pt-4 lg:pt-0 lg:space-x-6  xl:space-x-10 text-[#fff]  md:text-2xl font-bold ransition-all duration-300 ease-in-out">
          <a href="#home" className="inline-block hover:text-[#0ef]">
            Home
          </a>
          <a
            href="#about"
            className="inline-block hover:text-[#0ef]"
          >
            About
          </a>
          <a href="#skills" className="inline-block hover:text-[#0ef]">
            Skills
          </a>
          <a href="#projects" className="inline-block hover:text-[#0ef]">
            Projects
          </a>
          <a href="#contact" className="inline-block hover:text-[#0ef]">
            Contact
          </a>
        </nav>
      </div>
    );
};

export default Navbar;