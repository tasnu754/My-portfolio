/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Code,
  Database,
  Palette,
  Zap,
  Globe,
  GitBranch,
  Layers,
  Server,
  Box,
  Cpu,
  Code2,
} from "lucide-react";
import {
  SiCoffeescript,
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { FaBootstrap, FaJava, FaNodeJs } from "react-icons/fa";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skills = {
    frontend: [
      {
        name: "React.js",
        level: 90,
        icon: <SiReact size={24} />,
        color: "from-cyan-400 to-blue-500",
      },
      {
        name: "Next.js",
        level: 80,
        icon: <SiNextdotjs size={24} />,
        color: "from-slate-400 to-slate-600",
      },
      {
        name: "Redux/RTK",
        level: 85,
        icon: <SiRedux size={24} />,
        color: "from-yellow-400 to-orange-500",
      },
      {
        name: "Tailwind CSS",
        level: 88,
        icon: <SiTailwindcss size={24} />,
        color: "from-teal-400 to-cyan-500",
      },
      {
        name: "Bootstrap",
        level: 88,
        icon: <FaBootstrap size={24} />,
        color: "from-teal-400 to-cyan-500",
      },
      {
        name: "Material-UI",
        level: 88,
        icon: <Code size={24} />,
        color: "from-teal-400 to-cyan-500",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 90,
        icon: <FaNodeJs size={24} />,
        color: "from-green-400 to-emerald-600",
      },
      {
        name: "Express",
        level: 95,
        icon: <SiExpress size={24} />,
        color: "from-gray-400 to-gray-600",
      },
      {
        name: "MongoDB",
        level: 95,
        icon: <SiMongodb size={24} />,
        color: "from-green-500 to-green-700",
      },
      {
        name: "Mongoose",
        level: 90,
        icon: <SiMongoose size={24} />,
        color: "from-blue-400 to-blue-600",
      },
      {
        name: "MySql",
        level: 70,
        icon: <SiMysql size={24} />,
        color: "from-blue-400 to-blue-600",
      },
    ],
    other: [
      {
        name: "Git & GitHub",
        level: 85,
        icon: <GitBranch size={24} />,
        color: "from-orange-400 to-red-500",
      },
      {
        name: "DSA",
        level: 80,
        icon: <Code2 size={24} />,
        color: "from-purple-400 to-pink-500",
      },
      {
        name: "Java",
        level: 75,
        icon: <FaJava size={24} />,
        color: "from-blue-500 to-blue-700",
      },
      {
        name: "C++",
        level: 70,
        icon: <SiCplusplus size={24} />,
        color: "from-pink-400 to-rose-500",
      },
      {
        name: "PHP",
        level: 65,
        icon: <SiPhp size={24} />,
        color: "from-pink-400 to-rose-500",
      },
      {
        name: "Firebase",
        level: 80,
        icon: <SiFirebase size={24} />,
        color: "from-pink-400 to-rose-500",
      },
      {
        name: "Vercel",
        level: 80,
        icon: <SiVercel size={24} />,
        color: "from-pink-400 to-rose-500",
      },
      {
        name: "JWT",
        level: 85,
        icon: <SiJsonwebtokens size={24} />,
        color: "from-pink-400 to-rose-500",
      },
    ],
  };

  const categories = [
    // { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "other", label: "Tools & More" },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "frontend") {
      return [...skills.frontend];
    }
    return skills[activeCategory] || [];
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/50 scale-105"
                  : "bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredSkills().map((skill, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500"></div>

              <div className="relative z-10">
                {/* Icon and Name */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                {/* Progress Circle */}
                <div className="flex items-center justify-center my-4">
                  <div className="relative w-20 h-20">
                    {" "}
                    {/* Reduced from w-32 h-32 */}
                    {/* Background Circle */}
                    <svg className="transform -rotate-90 w-20 h-20">
                      {" "}
                      {/* Reduced size */}
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        className="text-slate-700"
                      />
                      {/* Progress Circle */}
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="url(#gradient)"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 35}`}
                        strokeDashoffset={`${
                          2 * Math.PI * 35 * (1 - skill.level / 100) // Updated for new radius
                        }`}
                        className="transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Gradient Definition */}
                    <svg className="absolute inset-0" width="0" height="0">
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Percentage Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        {" "}
                        {/* Reduced from text-3xl */}
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Proficiency Label */}
                <div className="text-center">
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                      skill.level >= 85
                        ? "bg-green-500/20 text-green-400"
                        : skill.level >= 75
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {skill.level >= 85
                      ? "Expert"
                      : skill.level >= 75
                      ? "Advanced"
                      : "Intermediate"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              {skills.frontend.length +
                skills.backend.length +
                skills.other.length}
            </div>
            <div className="text-gray-400 text-sm">Total Skills</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
              {skills.frontend.length}
            </div>
            <div className="text-gray-400 text-sm">Frontend</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              {skills.backend.length}
            </div>
            <div className="text-gray-400 text-sm">Backend</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
              {skills.other.length}
            </div>
            <div className="text-gray-400 text-sm">Tools & More</div>
          </div>
        </div>
      </div>
    </section>
  );
}
