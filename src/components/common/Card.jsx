import Image from "next/image";
import Link from "next/link";

export default function Card({ project }) {
  const { name, href, image } = project || {};
  return (
    <div className=" overflow-hidden transition-all w-full msm:w-[350px] msm:mx-auto bg-slate-500 rounded-lg ">
      <Link href={href} target="_blank">
        <Image
          className="hover:opacity-75 rounded-md  w-full h-full object-cover  transition-all"
          src={image}
          width="auto"
          height="auto"
          alt={name}
        />
      </Link>
    </div>
  );
}
