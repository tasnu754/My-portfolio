import { MdCastForEducation } from "react-icons/md";

const Education = () => {
  return (
    <div className="mt-36 space-y-10" id="education">
      <h2 className="text-4xl text-center font-bold  text-[#0ef]">Education</h2>
      <div className="mt-6 md:pl-24">
        <div className=" md:text-2xl">
          <div className="flex items-center gap-2">
            <MdCastForEducation className=""></MdCastForEducation>
            <p>BSC in Computer Science Engineering</p>
          </div>
          <p>East West University (Feb 2022 - Sep 2025)</p>
        </div>
        <div></div>
      </div>

      <div className="lg:flex justify-center item-center md:pr-24">
        <div className="flex-1"></div>
        <div className=" md:text-2xl">
          <div className="flex items-center gap-2">
            <MdCastForEducation className=""></MdCastForEducation>
            <p>Higher Secondary Certificate </p>
          </div>
          <p>Mohanogor Mohila College (2018 - 2020)</p>
        </div>
      </div>

      <div className="mt-6 md:pl-24">
        <div className=" md:text-2xl">
          <div className="flex items-center gap-2">
            <MdCastForEducation className=""></MdCastForEducation>
            <p>Secondary School Certificate</p>
          </div>
          <p>Dholairpar High School (2018)</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Education;
