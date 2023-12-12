import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod
          voluptas ab fugiat obcaecati, possimus provident numquam illo
          excepturi quo.
        </p>
        <div className="flex items-center gap-2 text-xl">
          <IoIosMail className="text-2xl text-[#0ef]"></IoIosMail>
          tasnuvamarziya60@gmail.com
        </div>
        <div className="flex justify-start items-center gap-2 text-2xl transparent ">
          <a
            href="#"
            className="w-[35px] h-[35px]  flex justify-center items-center rounded-md border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
          >
            <FaFacebookF></FaFacebookF>
          </a>
          <a
            href="#"
            className="w-[35px] h-[35px] flex justify-center items-center rounded-md border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
          >
            <FaLinkedinIn></FaLinkedinIn>
          </a>
          <a
            href="#"
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
