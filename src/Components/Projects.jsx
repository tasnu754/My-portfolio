
const Projects = () => {
    return (
      <div id="projects" className="min-h-screen items-center pt-36">
        <div id="project">
          <h2 className="text-4xl text-center font-bold  mb-10 text-[#0ef]">
            Current Projects
          </h2>

          <div className="flex flex-wrap gap-6">
            <div className="w-[600px] flex flex-col ">
              <img
                className=""
                src="https://i.ibb.co/VYkdyHW/Destiny-Duos.png"
                alt=""
              />
              <div className="flex-1 text-center py-10 text-xl bg-gray-200 text-black">
                <h2 className="font-bold text-2xl">Destiny Duos</h2>
                <p className="mb-10 px-2">
                  An online platform where people can choose their life partner.
                </p>
                <button className="btn-nav w-[90%] ">
                  <a href="https://destiny-duos.web.app">
                    S<span className="lowercase">ee</span> W
                    <span className="lowercase">ebsite</span>
                  </a>
                </button>
              </div>
            </div>
            <div className="w-[600px] flex flex-col">
              <img src="https://i.ibb.co/1GRq4JY/Reduce-waste.png" alt="" />
              <div className="flex-1 text-center py-10 text-xl bg-gray-200 text-black">
                <h2 className="font-bold text-2xl">Reduce Waste Together</h2>
                <p className="mb-10 px-2">
                  A food charity website. People can donate foods. Whoever needs
                  the foods they can have it without paying or paying some
                  amount if they want.
                </p>
                <button className="btn-nav w-[90%] ">
                  <a href="https://reduce-waste-together.web.app">
                    S<span className="lowercase">ee</span> W
                    <span className="lowercase">ebsite</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Projects;