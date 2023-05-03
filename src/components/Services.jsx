import backEnd from "../assets/icon/development/backend.png";
import frontEnd from "../assets/icon/development/front-end.png";
import fullStack from "../assets/icon/development/programmer.png";
import Divideder from "./common/Divideder";
import Service from "./common/Service";

export default function Services() {
  return (
    <section id="services" className="  md:pt-10 2xl:w-[1330px] 2xl:mx-auto  ">
      <div className=" md:py-20 ">
        {/* heading */}
        <div className="">
          <h2 className="font-bold uppercase text-center text-lg md:text-xl md:tracking-wide lg:text-2xl xl:text-3xl 2xl:text-4xl">
            my <span className="text-yellow-500"> services </span>
          </h2>
          <div className=" w-[100px] md:w-[150px] xl:w-[200px] mx-auto">
            <Divideder />
          </div>
          <p className=" px-1 text-center uppercase">
            i provide worldwide range of digital services
          </p>
        </div>
        {/* progress bar  */}
        <div className=" md:my-20 grid grid-cols-1 justify-items-center md:grid-cols-3 md:gap-x-4 ">
          <Service text={"Front End Web Development"} icon={frontEnd} />
          <Service text={"Back End Web Development"} icon={backEnd} />
          <Service text={"Full Stack Web Development"} icon={fullStack} />
        </div>
      </div>
    </section>
  );
}
