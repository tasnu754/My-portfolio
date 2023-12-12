import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";



const AboutMe = () => {
    return (
      <div
        className="flex flex-col-reverse gap-10 lg:flex-row  min-h-screen items-center"
        id="about"
      >
        <div className=" md:w-[510px] md:h-[400px] lg:w-[600px] lg:h-[450px] mx-auto rounded-md ">
          <img
            className="w-full h-full object-cover"
            src="https://i.ibb.co/cYKJ5Dg/Web-Developer-Illustration-Facebook-Post.png"
            alt=""
          />
        </div>
        <div className=" flex-1 lg:px-20 ">
          <h2 className="text-center text-3xl font-bold py-4 lg:py-0 lg:pb-4">
            About Me
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quod
            consectetur fugit quos possimus! Sapiente explicabo rem ab. Illo
            quam iure maxime atque tempore totam iusto dolor aperiam
            perspiciatis animi!
          </p>
          <div className="flex md:gap-10">
            <div className="pt-10 space-y-4 text-sm md:text-xl text-[#0ef]">
              <p className="">
                <MdOutlineDriveFileRenameOutline className="inline-block mr-2"></MdOutlineDriveFileRenameOutline>
                Name:
              </p>
              <p className="">
                <FaNetworkWired className="inline-block mr-2"></FaNetworkWired>
                Experience:
              </p>

              <p>
                <MdOutlineDateRange className="inline-block mr-2"></MdOutlineDateRange>
                Date of Birth:
              </p>
              <p>
                <IoLocation className="inline-block mr-2"></IoLocation>
                Address:
              </p>
              <p>
                <MdOutlineMailOutline className="inline-block mr-2"></MdOutlineMailOutline>
                Email:
              </p>
            </div>
            <div className="flex-1 pt-10 space-y-4 ml-4 text-sm md:text-xl text-[#0ef]">
              <p>Tasnuva Islam Mila</p>
              <p>1 year (self learning)</p>
              <p>December 31, 2001</p>
              <p>Jatrabari, Dhaka, Bangladesh</p>
              <p>tasnuvamarziya60@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutMe;