import { personal_info } from "@/data/personal_info";
import Image from "next/image";
import Img from "../assets/image/img.png";
import Divideder from "./common/Divideder";

export default function About() {
  const {
    name,
    email,
    address,
    age,
    freelance,
    languages,
    nationality,
    phone,
  } = personal_info || {};
  return (
    <section
      id="about-me"
      className=" px-1 py-20 md:px-8 2xl:w-[1330px] 2xl:mx-auto "
    >
      {/* heading, bio and diveder */}
      <div className="">
        <div className=" sm:mt-8 md:mt-24  flex items-center justify-center">
          <div className="w-32 md:w-32 lg:w-40 xl:w-60">
            <h2 className=" font-bold uppercase text-center text-lg md:text-xl md:tracking-wide lg:text-2xl xl:text-3xl 2xl:text-4xl ">
              About <span className="text-yellow-500"> me</span>
            </h2>
            <Divideder />
          </div>
        </div>
        <p className=" font-medium uppercase lg:text-lg text-center mt-4 text-sm">
          i design and code beautiful things, and i love what i do.
        </p>
      </div>
      {/* about and image */}
      <div className=" md:flex md:items-start md:gap-x-3 md:mt-10 lg:gap-x-12 xl:gap-x-32">
        {/* left side */}
        <div className=" py-6 md:py-2">
          <div className=" xs:w-[80%] xs:mx-auto xsm:w-[350px] xsm:mx-auto bg-slate-900 rounded-lg  ">
            <Image
              className="object-cover "
              src={Img}
              alt="Md. kabir uddin image"
              width="auto"
              height="auto"
              priority
            />
          </div>
        </div>
        {/* right side */}
        <div className=" px-2  ">
          <h2 className="text-xl text-center md:text-start tracking-wider font-semibold md:text-2xl lg:text-3xl ">
            {`I'm Md. kabir uddin`}{" "}
          </h2>
          <p className=" mt-4 text-center md:text-start ">
            I am a full stack web developer from
            <span className=" text-yellow-500"> Bangladesh.</span>
          </p>
          <p className="text-justify mt-6">
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences through meaningful
            interactions. check out my Portfolio.
          </p>
          <div className=" border-gray-600 border-b py-2 hidden sm:block"></div>
          <div className=" ">
            <h2 className=" text-xl  mt-7 mb-3 uppercase font-semibold tracking-wider">
              personal info
            </h2>
            {/* contact info */}
            <div className="sm:flex sm:items-center sm:justify-between ">
              {/* left side */}
              <div className="">
                <p className=" py-1">
                  <span className="  text-gray-500 font-semibold">Name : </span>
                  {name}
                </p>{" "}
                <p className=" py-1">
                  <span className=" text-gray-500 font-semibold">Age : </span>{" "}
                  {age}
                </p>{" "}
                <p className=" py-1">
                  <span className=" text-gray-500 font-semibold">
                    Languages :{" "}
                  </span>
                  {languages}
                </p>{" "}
                <p className=" py-1">
                  <span className=" text-gray-500 font-semibold">
                    Nationality :{" "}
                  </span>
                  {nationality}
                </p>
              </div>
              {/* ride side */}
              <div className="">
                <p className=" py-1">
                  <span className=" text-gray-500 font-semibold">
                    Address :{" "}
                  </span>
                  {address}
                </p>{" "}
                <p className="break-all  py-1">
                  <span className=" text-gray-500 font-semibold ">
                    Phone :{" "}
                  </span>
                  <a href={`tel:${phone}`}>{phone}</a>
                </p>{" "}
                <p className=" py-1 break-all">
                  <span className=" text-gray-500 font-semibold">Email : </span>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
                <p className=" py-1">
                  <span className=" text-gray-500 font-semibold">
                    Freelance :{" "}
                  </span>
                  {freelance}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
