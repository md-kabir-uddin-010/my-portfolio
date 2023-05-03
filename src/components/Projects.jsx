import { porjects } from "@/data/portfolio";
import Card from "./common/Card";
import Divideder from "./common/Divideder";

export default function Projects() {
  return (
    <section className=" md:py-10 2xl:pt-16 2xl:w-[1330px] 2xl:mx-auto">
      <div className="md:pt-20 pb-10 px-2 md:px-0 ">
        {/* heading */}
        <div className="">
          <h2 className="font-bold uppercase text-center text-lg md:text-xl md:tracking-wide lg:text-2xl xl:text-3xl 2xl:text-4xl">
            my <span className="text-yellow-500"> portfolio </span>
          </h2>
          <div className=" w-[100px] md:w-[150px] xl:w-[200px] mx-auto">
            <Divideder />
          </div>
          <p className=" text-center uppercase">
            my some recent work with full details project
          </p>
        </div>
        {/* progress bar  */}
        <div className="  my-20 grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-y-8  md:gap-y-12 md:w-[750px] md:mx-auto xl:w-[1250px]">
          {porjects?.map((project) => (
            <Card key={project?.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
