import { ExternalLink, Github } from "lucide-react";

const ProjectsCard = () => {
  const projects = [
    {
      title: "TestoBurger",
      description:
        "A full-stack food ordering web application with comprehensive features including cart management, order tracking, reviews, wishlist, and admin dashboard.",
      image: "/public/TestoBurger_HomePage.webp",
      // image: "/TestoBurger_thumbnail.png",
      live: "https://nextjs-food-ordering.vercel.app",
      github: "https://github.com/tasnu754/Nextjs_Food_Ordering",
      serverGithub: "https://github.com/tasnu754/Nextjs_Food_ordering_Server",
      tech: [
        "React",
        "Next.js",
        "Redux",
        "RTK Query",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Bcrypt",
        "Tailwind CSS",
      ],
      gradient: "from-pink-500 to-purple-600",
    },
    {
      title: "Destiny Duos",
      description:
        "A modern matrimonial platform connecting people to find their life partners. Features include advanced filtering, real-time chat, profile matching algorithms, and secure payment integration.",
      //   image: "https://i.ibb.co/VYkdyHW/Destiny-Duos.png",
      image: "/public/DestinyDuos_HomePage.webp",
      live: "https://destiny-duos.web.app",
      github: "https://github.com/tasnu754/Destiny-Duos-client",
      serverGithub: "https://github.com/tasnu754/Destiny-Duos-server",
      tech: [
        "React",
        "Firebase",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
      ],
      gradient: "from-pink-500 to-purple-600",
    },

    {
      title: "Reduce Waste Together",
      description:
        "A food charity platform reducing food waste by connecting donors with those in need. Features donation tracking, real-time updates, and community engagement tools.",
      //   image: "https://i.ibb.co/1GRq4JY/Reduce-waste.png",
      image: "/public/Reduce_HomePage.webp",
      live: "https://reduce-waste-together.web.app",
      github: "https://github.com/tasnu754/Reduce-Waste-Together-client",
      serverGithub: "https://github.com/tasnu754/Reduce-Waste-Together-server",
      tech: ["React", "Firebase", "Node.js", "Express", "MongoDB"],
      gradient: "from-green-500 to-teal-600",
    },
  ];
  return (
    <div className="container mx-auto px-5 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
      </div>

      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-7 md:ml-0 ml-10">
        {projects?.slice(0, 3).map((p) => (
          <div
            data-aos="zoom-in"
            key={p.name}
            className="h-full rounded-2xl bg-slate-800/50 backdrop-blur-sm overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
          >
            <div className="h-[280px] overflow-y-scroll  projectImage rounded-t-2xl">
              <img className="imageHoverScroll  w-full" src={p.image} alt="" />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400">{p.title}</h3>
              <p className="text-gray-300 leading-relaxed">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-cyan-400 border border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm font-semibold">Live Demo</span>
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all"
                >
                  <Github size={16} />
                  <span className="text-sm font-semibold">Client</span>
                </a>
                <a
                  href={p.serverGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all"
                >
                  <Github size={16} />
                  <span className="text-sm font-semibold">Server</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
