import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
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
  return (
    <div className=" mt-48 mb-24 lg:flex gap-4 space-y-10" id="contact">
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl text-center font-bold">Contact Me</h2>
        <p className="text-xl w-[80%]">
          I&apos;m eager to discuss how my skills and enthusiasm align with the
          goals of your team. Whether you have an exciting project on the
          horizon or need a proactive and dedicated team member, let&apos;s
          connect and explore the possibilities.
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
          ref={form}
          onSubmit={sendEmail}
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
  );
};

export default Contact;
