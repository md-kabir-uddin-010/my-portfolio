import Image from "next/image";
export default function Service({ text, icon }) {
  return (
    <div className=" py-9">
      <div className=" w-24 mx-auto bg-slate-700 rounded-md">
        <Image
          className=" p-2"
          src={icon}
          alt="web development"
          width="auto"
          height="auto"
          priority
        />
      </div>
      <div className=" mt-2 text-center">
        <h2
          className=" break-words py-1 xs:text-lg font-semibold
        "
        >
          {text}
        </h2>
      </div>
    </div>
  );
}
