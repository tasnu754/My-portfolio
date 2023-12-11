
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

        <nav className="space-x-4 pt-4 md:pt-0 md:space-x-6  lg:space-x-10 text-[#fff] hover:text-[#0ef] md:text-2xl font-bold ransition-all duration-300 ease-in-out">
          <a href="#" className="inline-block">
            Home
          </a>
          <a href="#" className="inline-block">
            About
          </a>
          <a href="#" className="inline-block">
            Skills
          </a>
          <a href="#" className="inline-block">
            Porjects
          </a>
          <a href="#" className="inline-block">
            Contact
          </a>
        </nav>
      </div>
    );
};

export default Navbar;