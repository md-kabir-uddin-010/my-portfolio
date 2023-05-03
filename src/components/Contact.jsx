import { personal_info } from "@/data/personal_info";
import Form from "./Form";
import Divideder from "./common/Divideder";

export default function Contact() {
  const { phone, email, address } = personal_info || {};
  return (
    <section
      id="contact-me"
      className=" md:pt-20 2xl:pt-16 2xl:w-[1330px] 2xl:mx-auto"
    >
      <div className="md:pt-10 pb-20 px-2 ">
        {/* heading */}
        <div className="my-6">
          <h2 className="font-bold uppercase text-center text-lg md:text-xl md:tracking-wide lg:text-2xl xl:text-3xl 2xl:text-4xl">
            get in <span className="text-yellow-500 "> touch </span>
          </h2>
          <div className=" w-[100px] md:w-[150px] xl:w-[200px] mx-auto">
            <Divideder />
          </div>
          <p className=" w-full msm:w-[80%] lg:w-[800px] mx-auto  text-center uppercase">
            feel free to get in touch with me. i am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
        </div>
        {/* cotact section  */}
        <div className=" w-full xsm:w-[400px] xsm:mx-auto sm:w-full sm:mx-0 sm:px-2 md:px-8 lg:flex lg:items-start lg:px-1 lg:mt-32  ">
          <div className=" break-all px-2 msm:w-[280px] msm:mx-auto sm:w-full sm:mx-0 sm:flex sm:items-center sm:justify-between lg:flex-col lg:items-start lg:w-[600px] lg:gap-x-6 xl:w-[600px]">
            <div className=" py-4 lg:py-8">
              <h2 className=" uppercase text-lg font-semibold tracking-wider text-slate-500">
                phone :
              </h2>
              <a className=" text-gray-200" href={`tel:${phone}`}>
                {phone}
              </a>
            </div>
            <div className=" py-4 lg:py-8">
              <h2 className=" uppercase text-lg font-semibold tracking-wider text-slate-500">
                email :
              </h2>
              <a className=" text-gray-200" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
            <div className=" py-4 lg:py-8">
              <h2 className=" uppercase text-lg font-semibold tracking-wider text-slate-500">
                address :
              </h2>
              <p className=" text-gray-200">{address}</p>
            </div>
          </div>
          {/* form section */}
          <div className=" px-2  xl:w-[700px] xl:mx-auto">
            <p className=" mt-6 lg:mt-0 pb-4 text-gray-400">
              If you have any suggestion, project or even you want to say
              Hello.. please fill out the form below and I will reply you
              shortly.
            </p>
            <div className="">
              <Form />
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
