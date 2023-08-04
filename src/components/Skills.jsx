import Divideder from "./common/Divideder";
import ProgressBar from "./common/ProgressBar";

export default function Skills() {
  return (
    <section className="   md:py-20 2xl:pt-16 2xl:w-[1330px] 2xl:mx-auto">
      <div className=" md:pt-20 pb-20 px-2  ">
        {/* heading */}
        <div className=" w-32 md:w-32 lg:w-40 xl:w-60 mb-8 mx-auto">
          <h2 className="font-bold uppercase text-center text-lg md:text-xl md:tracking-wide lg:text-2xl xl:text-3xl 2xl:text-4xl">
            My <span className="text-yellow-500">Skills</span>
          </h2>
          <Divideder />
        </div>
        {/* progress bar  */}
        <div className=" overflow-hidden xs:px-4 xsm:mx-auto sm:grid sm:grid-cols-2 sm:gap-x-4 sm:w-full md:gap-x-10 lg:gap-x-14 xl:gap-x-28 ">
          <ProgressBar lable={"HTML"} progress={95} />
          <ProgressBar lable={"CSS"} progress={90} />
          <ProgressBar lable={"JavaScript"} progress={85} />

          <ProgressBar lable={"React JS"} progress={90} />
          <ProgressBar lable={"Next JS"} progress={80} />
          <ProgressBar lable={"Node JS"} progress={80} />

          <ProgressBar lable={"TypeScript"} progress={80} />
          <ProgressBar lable={"Tailwind CSS"} progress={90} />
        </div>
      </div>
    </section>
  );
}
