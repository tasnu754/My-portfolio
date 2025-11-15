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
  Link,
  Code2,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCodechef,
  SiCodeforces,
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
import ProjectsCard from "./ProjectsCard";
import SkillsSection from "./SkillsSection";

export const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
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
      {/* Navigation - Updated for better mobile */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Tasnuva
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
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
                  className={`capitalize text-lg lg:text-xl font-bold transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item
                      ? "text-cyan-400 font-semibold"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-3 space-y-3">
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
                  className="block px-3 py-3 capitalize text-lg hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors border-b border-cyan-400/10"
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
                responsive web applications with cutting-edge technologies. I
                also have strong DSA, problem-solving skills, and advanced
                SQL/database knowledge.
              </p>

              <div className="flex items-center space-x-4">
                {[
                  {
                    icon: <Linkedin size={20} />,
                    href: "https://www.linkedin.com/in/tasnuva-islam-mila-2105462a4",
                    name: "LinkedIn",
                  },
                  {
                    icon: <Github size={20} />,
                    href: "https://github.com/tasnu754",
                    name: "GitHub",
                  },
                  {
                    icon: <SiCodeforces size={20} />,
                    href: "https://codeforces.com/profile/Tasnuva_Islam",
                    name: "Codeforces",
                  },
                  {
                    icon: <SiCodechef size={20} />,
                    href: "https://www.codechef.com/users/tasnuislam754",
                    name: "CodeChef",
                  },
                ].map((social, idx) => (
                  <div key={idx} className="relative group">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/50"
                    >
                      {social.icon}
                    </a>
                    {/* Simple Tooltip */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="bg-slate-900 text-cyan-400 text-xs py-1 px-2 rounded-md border border-cyan-400/50">
                        {social.name}
                      </span>
                    </div>
                  </div>
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
            <div className="relative group ">
              <div className="absolute inset-0  rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                // src="https://i.ibb.co/cYKJ5Dg/Web-Developer-Illustration-Facebook-Post.png"
                src="/Tasnuva.webp"
                alt="About Me"
                className="relative mx-auto rounded-xl shadow-2xl h-64 md:h-[400px]  xl:h-[470px]"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a recent BSc in Computer Science and Engineering graduate
                with 2 years of dedicated self-learning in full-stack web
                development. My expertise includes modern front-end technologies
                like Next.js, React, Redux Toolkit, and Tailwind CSS,
                complemented by back-end skills in Node.js, Express.js, MongoDB
                with Mongoose, and MySQL. I actively participate in competitive
                programming with 200+ problems solved on Codeforces and regular
                contest participation on CodeChef, strengthening my
                problem-solving and DSA skills.
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
                    label: "Specialization",
                    value: "Full-Stack Web",
                    icon: <Code2 />,
                  },
                  {
                    label: "Codeforces",
                    value: "200+ Problems Solved",
                    icon: <SiCodeforces />,
                  },
                  {
                    label: "Location",
                    value: "Dhaka, Bangladesh",
                    icon: <Globe />,
                  },
                  {
                    label: "Email",
                    value: "tasnuvamarziya60@gmail.com",
                    icon: <Mail />,
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
                    <p className="text-gray-300 text-sm break-words">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 md:px-4 relative">
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
                  idx % 2 === 0 ? "md:!pr-1/2" : " md:!pl-1/2 md:left-[46%]"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    idx % 2 === 0 ? "md:!text-right md:!pr-12" : " md:!pl-12"
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
      <SkillsSection></SkillsSection>

      {/* Projects Section */}
      <section id="projects" className="py-20  relative">
        <ProjectsCard></ProjectsCard>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-4 relative">
        <div
          className=" max-w-7xl mx-auto mt-48 mb-24 lg:flex gap-4 space-y-10"
          id="contact"
        >
          <div className="flex-1 space-y-4">
            <div className="text-start mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Contact{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r text-start from-cyan-400 to-purple-600 "></div>
            </div>

            <p className="text-xl md:w-[80%] ">
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
                href="https://codeforces.com/profile/Tasnuva_Islam"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-[35px] h-[35px] flex justify-center items-center rounded-md border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
              >
                <SiCodeforces></SiCodeforces>
              </a>
              <a
                href="https://www.codechef.com/users/tasnuislam754"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-[35px] h-[35px] flex justify-center items-center rounded-md border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
              >
                <SiCodechef></SiCodechef>
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
                className="bg-white text-black p-2 rounded-md w-full"
                placeholder="Message"
              ></textarea>
              <div className="pt-2 flex justify-center ">
                <button
                  type="submit"
                  value="Send"
                  className="flex items-center space-x-2 px-4 py-2 border w-[50%] text-xl font-bold text-cyan-400 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all justify-center text-center"
                >
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
