import { marketplace_link, social_link } from "@/data/contacts";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import Divideder from "./common/Divideder";
import Tooltip from "./common/Tooltip";

export default function Footer() {
  const succesMessage = (text) => toast.success(text);
  return (
    <section className="md:pt-0 2xl:w-[1330px] 2xl:mx-auto ">
      <ToastContainer />
      {/* header */}
      <div className=" mb-10">
        <div className=" sm:mt-8   flex items-center justify-center">
          <div className=" w-24 md:w-32 lg:w-40 xl:w-52">
            <h2 className=" font-bold uppercase text-center text-lg md:text-xl md:tracking-wide lg:text-2xl xl:text-3xl 2xl:text-4xl ">
              Find <span className="text-yellow-500"> me</span>
            </h2>
            <Divideder />
          </div>
        </div>
        <p className=" font-medium uppercase lg:text-lg text-center mt-4 text-sm">
          social media and freelance marketplace
        </p>
      </div>
      {/* icon section */}
      <div className="">
        {/* social icno */}
        <div className=" mb-4 flex items-center gap-5 justify-center flex-col md:flex-row">
          <div className=" flex items-center flex-col xs:flex-row">
            {social_link?.map((link) => {
              if (link?.name === "discord") {
                return (
                  <Tooltip key={link?.id} message={"copy username"}>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(link?.href);
                        succesMessage(link?.name + " user name copied");
                      }}
                      className=" m-3 overflow-hidden   transition-all w-10 h-10 bg-[#1F2044] hover:bg-[#ffb400] px-1 py-1 rounded-md flex items-center justify-center font-bold"
                    >
                      <Image
                        src={link?.icon}
                        alt={link?.name}
                        width="auto"
                        height="auto"
                        priority
                      />
                    </button>
                  </Tooltip>
                );
              } else {
                return (
                  <Tooltip key={link?.id} message={link?.name}>
                    <Link
                      href={link?.href}
                      target="_blank"
                      className=" m-3 overflow-hidden   transition-all w-10 h-10 bg-[#1F2044] hover:bg-[#ffb400] px-1 py-1 rounded-md flex items-center justify-center font-bold"
                    >
                      <Image
                        src={link?.icon}
                        alt={link?.name}
                        width="auto"
                        height="auto"
                        priority
                      />
                    </Link>
                  </Tooltip>
                );
              }
            })}
          </div>
          <div className="flex items-center flex-col xs:flex-row">
            {marketplace_link?.map((link) => (
              <Tooltip key={link?.id} message={link?.name}>
                <Link
                  href={link?.href}
                  target="_blank"
                  className=" m-3 overflow-hidden hover:bg-[#ffb400] transition-all w-20 h-10 px-1 bg-slate-100 rounded-md flex items-center justify-center font-bold"
                >
                  <Image
                    src={link?.icon}
                    alt={link?.name}
                    width="auto"
                    height="auto"
                    priority
                  />
                </Link>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
      {/* copyright section */}
      <div className=" text-center py-2">
        Copyright &copy; {new Date().getFullYear()} | Md. kabir uddin
      </div>
    </section>
  );
}
