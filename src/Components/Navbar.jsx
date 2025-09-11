import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="xl:fixed transparent xl:header z-10 p-4 mb-6 md:p-10 xl:w-full xl:px-40 shadow-md rounded-md border-none lg:px-6 lg:flex justify-between"
    >
      <div className="flex justify-between items-center">
        <a
          href="#"
          className="mr-10 xl:mr-[400px] relative  text-2xl font-bold"
        >
          <span className='text-[#0ef]'>T</span>asnuva
        </a>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#fff] focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`z-10 lg:flex lg:items-center space-y-6 md:space-y-0 lg:space-x-6 xl:space-x-10 text-[#fff] md:text-2xl font-bold transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        } lg:block`}
      >
        <a href="#home" className="block mt-6 md:mt-0 hover:text-[#0ef]">
          Home 
        </a>
        <a href="#about" className="block hover:text-[#0ef]">
          About 
        </a>
        <a href="#skills" className="block hover:text-[#0ef]">
          Skills 
        </a>
        <a href="#projects" className="block hover:text-[#0ef]">
          Projects 
        </a>
        <a href="#contact" className="block hover:text-[#0ef]">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
