
const Navbar = () => {
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="lg:fixed transparent lg:header z-10 p-4 mb-6 md:p-10 lg:w-full lg:px-40 shadow-md rounded-md border-none  md:px-6 md:flex justify-between "
      >
        <div>
          <a
            href="#"
            className=" mr-10 lg:mr-[400px] relative text-[#fff] text-2xl font-bold"
          >
            Portfolio
          </a>
        </div>

        <nav className="space-x-4 pt-4 md:pt-0 md:space-x-6  lg:space-x-10 text-[#fff]  md:text-2xl font-bold ransition-all duration-300 ease-in-out">
          <a href="#home" className="inline-block hover:text-[#0ef]">
            Home
          </a>
          <a href="#about" className="inline-block hover:text-[#0ef]">
            About
          </a>
          <a href="#skills" className="inline-block hover:text-[#0ef]">
            Skills
          </a>
          <a href="#projects" className="inline-block hover:text-[#0ef]">
            Porjects
          </a>
          <a href="#contact" className="inline-block hover:text-[#0ef]">
            Contact
          </a>
        </nav>
      </div>
    );
};

export default Navbar;