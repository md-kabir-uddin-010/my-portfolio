import Image from "next/image";
import Link from "next/link";

export default function Card({ project }) {
  const { name, href, image, github } = project || {};
  return (
    <div className=" w-full transition-all msm:w-[350px] msm:mx-auto bg-slate-800 rounded-lg  ">
      <div className=" group ">
        <div className="">
          <Image
            className=" w-full min-h-[200px] rounded-l-md rounded-r-md object-cover  transition-all"
            src={image}
            width={500}
            height={500}
            alt={name}
          />
        </div>
        <div className=" mt-2 text-gray-500">
          <div className=" w-full h-full flex items-center justify-center ">
            {href && (
              <Link
                target="_blank"
                className=" mx-3 capitalize hover:text-slate-200 transition-all duration-300 hover:underline"
                href={href}
              >
                live
              </Link>
            )}
            {github && <span className=" mx-2">|</span>}
            {github && (
              <Link
                target="_blank"
                className=" mx-3 capitalize hover:text-slate-200 transition-all duration-300 hover:underline"
                href={github}
              >
                github
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className=" transition-all w-full msm:w-[350px] msm:mx-auto bg-slate-500 rounded-lg ">
<Link href={href} target="_blank"></Link>

<div className=" group relative ">
  <Image
    className="hover:opacity-75 rounded-md  w-full h-full object-cover  transition-all"
    src={image}
    width="auto"
    height="auto"
    alt={name}
  /> */
}
{
  /* live and github */
}
//   <div className="hidden group-hover:block absolute top-0 left-0  ">
//     <div className=" w-full h-full flex items-center justify-center bg-[#292b9783]">
//       <Link className=" mx-3 capitalize" href={""}>
//         live
//       </Link>
//       <span className=" mx-2">|</span>
//       <Link className=" mx-3 capitalize" href={""}>
//         github
//       </Link>
//     </div>{" "}
//   </div>
// </div>
// </div>
