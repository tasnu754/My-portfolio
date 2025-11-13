/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import {
  Camera,
  Code,
  Database,
  Globe,
  Mail,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Download,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
  Rocket,
  Book,
  Award,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiInstagram,
  SiJavascript,
  SiMaterialdesign,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const ModernPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const contactFormRef = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9mt564n",
        "template_it3jim8",
        form.current,
        "5RZHP6FAfGyECUuGU"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message send successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const titles = [
    "Full stack Developer",
    "Frontend Developer",
    "MERN Stack Developer",
  ];
  const currentTitle = titles[titleIndex];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeout;
    if (typedText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setTypedText(currentTitle.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText("");
        setTitleIndex((titleIndex + 1) % titles.length);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [typedText, currentTitle, titleIndex, titles.length]);

  const skills = {
    frontend: [
      { name: "React JS", level: 90, icon: <FaReact /> },
      { name: "Redux/RTK", level: 85, icon: <SiRedux /> },
      { name: "Material-UI", level: 95, icon: <SiMaterialdesign /> },
      { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss /> },
      { name: "JavaScript", level: 90, icon: <SiJavascript /> },
      { name: "Bootstrap", level: 76, icon: <FaBootstrap /> },
    ],
    backend: [
      { name: "Next.js", level: 85, icon: <SiNextdotjs /> },
      { name: "Node.js", level: 80, icon: <FaNodeJs /> },
      { name: "Express.js", level: 85, icon: <SiExpress /> },
      { name: "MongoDB", level: 90, icon: <SiMongodb /> },
      { name: "Mongoose", level: 85, icon: <SiMongoose /> },
      { name: "SQL", level: 75, icon: <SiMysql /> },
    ],
    other: [
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Java (OOP)", level: 70 },
      { name: "C++", level: 90 },
      { name: "C Language", level: 80 },
      { name: "PHP", level: 60 },
    ],
  };

  const projects = [
    {
      title: "Destiny Duos",
      description:
        "A modern matrimonial platform connecting people to find their life partners. Features include advanced filtering, real-time chat, profile matching algorithms, and secure payment integration.",
      image: "TestoBurger thumbnail.png",
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
      image: "https://i.ibb.co/VYkdyHW/Destiny-Duos.png",
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
      image: "https://i.ibb.co/1GRq4JY/Reduce-waste.png",
      live: "https://reduce-waste-together.web.app",
      github: "https://github.com/tasnu754/Reduce-Waste-Together-client",
      serverGithub: "https://github.com/tasnu754/Reduce-Waste-Together-server",
      tech: ["React", "Firebase", "Node.js", "Express", "MongoDB"],
      gradient: "from-green-500 to-teal-600",
    },
  ];

  const education = [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "East West University",
      period: "Feb 2022 - Sep 2025",
      icon: <Award />,
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Mohanogor Mohila College",
      period: "2018 - 2020",
      icon: <Book />,
    },
    {
      degree: "Secondary School Certificate",
      institution: "Dholairpar High School",
      period: "2018",
      icon: <Book />,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Form submission would happen here. Integration with EmailJS or your preferred service."
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 top-1/2 -right-48 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 -bottom-48 left-1/2 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-slate-900/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Tasnuva
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "education",
                "skills",
                "projects",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize text-xl font-bold transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item
                      ? "text-cyan-400 font-semibold"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "home",
                "about",
                "education",
                "skills",
                "projects",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 capitalize hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Sparkles size={20} />
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Tasnuva Islam Mila
                </span>
              </h1>

              <div className="text-2xl md:text-3xl h-12">
                <span className="text-gray-300">I'm a </span>
                <span className="text-cyan-400 font-semibold">{typedText}</span>
                <span className="animate-pulse">|</span>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in React, Redux,RTK query, Next.js, Node.js,
                Express.js, MongoDB, Mongoose and MySQL. Building modern,
                responsive web applications with cutting-edge technologies.
              </p>

              <div className="flex items-center space-x-4">
                {[
                  {
                    icon: <Facebook size={20} />,
                    href: "https://www.facebook.com/tasnuva.islam4",
                  },
                  {
                    icon: <Linkedin size={20} />,
                    href: "https://www.linkedin.com/in/tasnuva-islam-mila-2105462a4",
                  },
                  {
                    icon: <Github size={20} />,
                    href: "https://github.com/tasnu754",
                  },
                  {
                    icon: <Instagram size={20} />,
                    href: "https://www.instagram.com/tasnuva_islam754/",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/50"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <a
                href="https://drive.google.com/uc?export=download&id=1QGL8OL6e5mTd7mJDFasJsAa_uYRR0tL-"
                download="Tasnuva_Islam_Resume.pdf"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} />
                <span className="font-semibold">Download Resume</span>
              </a>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 !rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="https://i.ibb.co/Jy1J7Td/profile-pic-4.png"
                // src="/public/Tasnuva.webp"
                alt="Tasnuva Islam Mila"
                className="relative w-[80%]      mx-auto !rounded-full border-4 border-cyan-400/50 shadow-2xl shadow-cyan-400/50 "
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0  rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                // src="https://i.ibb.co/cYKJ5Dg/Web-Developer-Illustration-Facebook-Post.png"
                src="Tasnuva.webp"
                alt="About Me"
                className="relative mx-auto rounded-xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a recent BSc in Computer Science and Engineering graduate.
                I&apos;ve spent the last two years actively building my skills
                to become a full-stack web developer. I have a strong foundation
                in modern front-end development, specializing in Nextjs, React,
                Redux Toolkit, Tailwind CSS, Bootstrap, and Material-UI, while
                my back-end expertise covers Node.js, and Express.js along with
                experience in databases like MongoDB, Mongoose and MySQL.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Name", value: "Tasnuva Islam Mila", icon: <Zap /> },
                  {
                    label: "Experience",
                    value: "2 Years (Self Learning)",
                    icon: <Rocket />,
                  },
                  {
                    label: "DOB",
                    value: "December 31, 2001",
                    icon: <Calendar />,
                  },
                  {
                    label: "Location",
                    value: "Dhaka, Bangladesh",
                    icon: <Globe />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20 hover:border-cyan-400/50 transition-all"
                  >
                    <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                      {item.icon}
                      <span className="text-sm font-semibold">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20">
                <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                  <Mail size={20} />
                  <span className="text-sm font-semibold">Email</span>
                </div>
                <p className="text-gray-300">tasnuvamarziya60@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Educational{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
          </div>

          <div className="relative">
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-600`}
            ></div>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`relative mb-12 ${
                  idx % 2 === 0 ? "md:!pr-1/2" : "md:!pl-1/2 !left-[46%]"
                }`}
              >
                <div
                  className={`md:w-1/2 ${
                    idx % 2 === 0 ? "md:!text-right md:!pr-12" : "md:!pl-12"
                  }`}
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-400/20 transform hover:scale-105">
                    <div
                      className={`flex items-center space-x-2 mb-3 ${
                        idx % 2 === 0 ? "md:!justify-end" : ""
                      }`}
                    >
                      <div className="text-cyan-400">{edu.icon}</div>
                      <h3 className="text-xl font-bold text-cyan-400">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                  </div>
                </div>
                <div
                  className={`absolute ${
                    idx % 2 === 0 ? "md:left-1/2" : "md:right-[95%]"
                  } top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Code className="text-cyan-400" />
                <span>Frontend</span>
              </h3>
              <div className="space-y-6">
                {skills.frontend.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between mb-2">
                      <span className=" flex items-center gap-2 font-semibold text-gray-300">
                        {skill.icon} {skill.name}
                      </span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-cyan-400/50"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Database className="text-cyan-400" />
                <span>Backend</span>
              </h3>
              <div className="space-y-6">
                {skills.backend.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold flex items-center gap-2 text-gray-300">
                        {skill.icon} {skill.name}
                      </span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-cyan-400/50"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Other Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.other.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-cyan-400/50"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}
                  ></div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
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
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-semibold">Live Demo</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all"
                    >
                      <Github size={16} />
                      <span className="text-sm font-semibold">Client</span>
                    </a>
                    <a
                      href={project.serverGithub}
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div
          className=" max-w-7xl mx-auto mt-48 mb-24 lg:flex gap-4 space-y-10"
          id="contact"
        >
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl text-center font-bold">Contact Me</h2>
            <p className="text-xl w-[80%]">
              I&apos;m eager to discuss how my skills and enthusiasm align with
              the goals of your team. Whether you have an exciting project on
              the horizon or need a proactive and dedicated team member,
              let&apos;s connect and explore the possibilities.
            </p>
            <div className="flex items-center gap-2 text-xl">
              <IoIosMail className="text-2xl font-bold text-[#0ef]"></IoIosMail>
              tasnuvamarziya60@gmail.com
            </div>
            <div className="flex justify-start items-center gap-2 text-2xl transparent ">
              <a
                href="https://www.facebook.com/tasnuva.islam4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[35px] h-[35px]  flex justify-center items-center rounded-md border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
              >
                <FaFacebookF></FaFacebookF>
              </a>
              <a
                href="https://www.linkedin.com/in/tasnuva-islam-mila-2105462a4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[35px] h-[35px] flex justify-center items-center rounded-md border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
              >
                <FaLinkedinIn></FaLinkedinIn>
              </a>
              <a
                href="https://github.com/tasnu754"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[35px] h-[35px] flex justify-center items-center rounded-md border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
              >
                <FiGithub></FiGithub>
              </a>
              <a
                href="https://www.instagram.com/tasnuva_islam754/"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-[35px] h-[35px] flex justify-center items-center rounded-md border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
              >
                <SiInstagram></SiInstagram>
              </a>
            </div>
          </div>
          <div className="flex-1 ">
            <form
              // ref={form}
              // onSubmit={sendEmail}
              className="space-y-10 mt-10 md:mt-0"
            >
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="from_name"
                  type="text"
                  placeholder=""
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-lg font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Enter Name
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="from_email"
                  type="email"
                  placeholder=""
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-lg font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Enter Email
                </label>
              </div>

              <textarea
                name="message"
                rows={5}
                cols={100}
                className="bg-black p-2 rounded-md w-full"
                placeholder="Message"
              ></textarea>
              <div className="pt-2">
                <button type="submit" value="Send" className="btn-nav w-full">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-400/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Tasnuva Islam Mila. Crafted with 💙 and React
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #1e293b;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #a855f7);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #9333ea);
        }
      `}</style>
    </div>
  );
};

// Calendar icon component (since it's not in lucide-react by default)
const Calendar = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);
