import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="pt-28">
      <div className="min-h-screen items-center">
        <h2 className="text-4xl text-center font-bold  mb-6 text-[#0ef]">
          My Skills
        </h2>

        <div className="md:flex gap-16">
          <div className="flex-1 ">
            <h3 className="text-2xl text-center underline">Frontend</h3>
            <div className="pt-10 space-y-4 w-full ">
              <div className="flex  gap-2 text-xl font-bold">
                <FaHtml5 className="text-[#0ef]"></FaHtml5>React Js
              </div>
              <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
                <div className="flex  justify-center w-[90%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
                  90%
                </div>
              </div>
            </div>
            <div className="pt-10 space-y-4 w-full ">
              <div className="flex  gap-2 text-xl font-bold">
                <FaCss3Alt className="text-[#0ef]"></FaCss3Alt>Materia-UI
              </div>
              <div className="flex border-2 border-black  w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
                <div className="flex  justify-center  w-[95%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
                  95%
                </div>
              </div>
            </div>
            <div className="pt-10 space-y-4 w-full ">
              <div className="flex  gap-2 text-xl font-bold">
                <SiTailwindcss className="text-[#0ef]"></SiTailwindcss> Tailwind
                CSS
              </div>
              <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
                <div className="flex  justify-center w-[95%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
                  95%
                </div>
              </div>
            </div>
            <div className="pt-10 space-y-4 w-full ">
              <div className="flex  gap-2 text-xl font-bold">
                <IoLogoJavascript className="text-[#0ef]"></IoLogoJavascript>
                JavaScript
              </div>
              <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
                <div className="flex  justify-center w-[90%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
                  90%
                </div>
              </div>
            </div>
            <div className="pt-10 space-y-4 w-full ">
              <div className="flex  gap-2 text-xl font-bold">
                <FaReact className="text-[#0ef]"></FaReact>Boostrap
              </div>
              <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
                <div className="flex  justify-center w-[76%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
                  76%
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 ">
            <h3 className="text-2xl text-center underline mt-10 md:mt-0">
              Backend
            </h3>
            <div className="pt-10 space-y-4 w-full ">
              <div className="flex  gap-2 text-xl font-bold">
                <img
                  src="../../public/Nextjs_Icon.png"
                  className="text-[#0ef] h-7"
                ></img>
                Next Js
              </div>
              <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
                <div className="flex  justify-center w-[85%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
                  85%
                </div>
              </div>
            </div>
            <div className="pt-10 space-y-4 w-full ">
              <div className="flex  gap-2 text-xl font-bold">
                <FaNode className="text-[#0ef] text-5xl"></FaNode>Node Js
              </div>
              <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
                <div className="flex  justify-center w-[90%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
                  80%
                </div>
              </div>
            </div>
            <div className="pt-10 space-y-4 w-full ">
              <div className="flex  gap-2 text-xl font-bold">
                <SiExpress className="text-[#0ef]"></SiExpress>Express Js
              </div>
              <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
                <div className="flex  justify-center w-[85%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
                  85%
                </div>
              </div>
            </div>
            <div className="pt-10 space-y-4 w-full ">
              <div className="flex  gap-2 text-xl font-bold">
                <SiMongodb className="text-[#0ef]"></SiMongodb>
                MongoDB
              </div>
              <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
                <div className="flex  justify-center w-[90%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
                  90%
                </div>
              </div>
            </div>
            <div className="pt-10 space-y-4 w-full ">
              <div className="flex  gap-2 text-xl font-bold">
                <SiMysql className="text-[#0ef]"></SiMysql>
                MySQL
              </div>
              <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
                <div className="flex  justify-center w-[80%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
                  75%
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl pt-16  font-bold  mb-4 underline">Others</h2>
        <div className=" space-y-4 w-full mb-6">
          <div className="flex items-center gap-2 text-xl font-bold">
            Data Structures and Algorithm
          </div>
          <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
            <div className="flex items-center justify-center w-[80%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
              80%
            </div>
          </div>
        </div>
        <div className=" space-y-4 w-full mb-6">
          <div className="flex items-center gap-2 text-xl font-bold">
            Java Language (Object Oriented Programming)
          </div>
          <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
            <div className="flex items-center justify-center w-[70%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
              70%
            </div>
          </div>
        </div>
        <div className=" space-y-4 w-full mb-6">
          <div className="flex items-center gap-2 text-xl font-bold">
            C++ Language
          </div>
          <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
            <div className="flex items-center justify-center w-[90%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
              90%
            </div>
          </div>
        </div>
        <div className=" space-y-4 w-full mb-6">
          <div className="flex items-center gap-2 text-xl font-bold">
            C Language
          </div>
          <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
            <div className="flex items-center justify-center w-[80%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
              80%
            </div>
          </div>
        </div>
        <div className=" space-y-4 w-full mb-6">
          <div className="flex items-center gap-2 text-xl font-bold">PHP</div>
          <div className="flex border-2 border-black w-full h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
            <div className="flex items-center justify-center w-[60%] h-full overflow-hidden text-black break-all bg-gray-300 rounded-full">
              60%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
