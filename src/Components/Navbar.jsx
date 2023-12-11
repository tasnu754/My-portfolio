
const Navbar = () => {
    return (
      <div className="fixed transparent z-10 md:flex justify-between ">
        <div>
          <a
            href="#"
            className=" mr-10 lg:mr-[400px] relative text-[#fff] text-2xl font-bold"
          >
            Portfolio
          </a>
        </div>

        <nav className=" md:space-x-10 text-[#fff] hover:text-[#0ef] text-2xl font-bold ransition-all duration-300 ease-in-out">
          <a href="#" className="block md:inline-block">Home</a>
          <a href="#" className="block md:inline-block">About</a>
          <a href="#" className="block md:inline-block">Skills</a>
          <a href="#" className="block md:inline-block">Porjects</a>
          <a href="#" className="block md:inline-block">Contact</a>
        </nav>
      </div>
    );
};

export default Navbar;