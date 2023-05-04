import { my_cv_link } from "@/data/cv";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Img from "../assets/image/img.png";

export default function Hero() {
  return (
    <section id="home" className=" py-10 2xl:w-[1330px] 2xl:mx-auto">
      <div className=" px-2 md:flex md:items-end md:px-8 md:gap-x-6 lg:gap-x-40 lg:justify-between xl:gap-x-56 2xl:gap-x-80 2xl:pt-16">
        <div className=" whitespace-break-spaces ">
          <h1 className=" font-semibold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">{`Hello, I'm Md. Kabir uddin`}</h1>
          <div className=" text-lg pt-3 lg:text-xl font-semibold">
            <span className="font-normal">I am a</span>{" "}
            <TypeAnimation
              sequence={[
                "Full stack web developer",
                1000,
                "Front end web developer",
                1000,
                "Back end web developer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              cursor={true}
              repeat={Infinity}
              className=" text-sky-500"
            />
          </div>
          <p className=" pt-7 text-justify  whitespace-break-spaces ">
            {"I’m"} a MERN Full Stack Web developer. I am passionate about
            making error-free websites with 100% client satisfaction. I love to
            solve real-world problems. I am strategic and goal-oriented, and I
            always work with an end goal in mind.
          </p>
          <button className=" flex items-center justify-center gap-x-1 tracking-wider uppercase mt-5 font-normal bg-[#2D3262] rounded-md px-4 text-center py-2 xl:text-lg hover:bg-yellow-600 transition-all duration-100">
            <Link href={my_cv_link} target="_blank" className=" break-all">
              download cv
            </Link>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 11l5 5l5 -5"></path>
              <path d="M12 4l0 12"></path>
            </svg>
          </button>
        </div>
        <div className=" pt-4  ">
          <div className="  xs:w-[80%] xs:mx-auto xsm:w-[350px] xsm:mx-auto">
            <div>
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
        </div>
      </div>{" "}
    </section>
  );
}
