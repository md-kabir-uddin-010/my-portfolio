import { links } from "@/data/links";
import useOutsideClick from "@/hooks/useOutsideClick";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import img from "../assets/image/logo.png";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const wraperRef = useRef(null);
  const isOutSideClick = useOutsideClick(wraperRef);

  useEffect(() => {
    if (isOutSideClick) {
      setIsOpen(false);
    }
  }, [isOutSideClick]);

  //  handle menu is Open
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  //  handle menu is close
  const handleIsClose = () => {
    setIsOpen(false);
  };

  return (
    <nav
      ref={wraperRef}
      className=" bg-navbar-primary  py-2 border-b border-sky-900"
    >
      <div className=" flex items-center justify-between px-2 md:px-4 lg:px-8 2xl:w-[1330px] 2xl:mx-auto relative transition-all">
        {/* logo section */}
        <div className=" flex items-center gap-x-2">
          <Link href={"/"}>
            <Image
              className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-full border-2 border-green-500 object-cover"
              src={img}
              alt="logo"
              width="100"
              height="100"
              priority
            />
          </Link>
          <h2 className=" hidden xs:block">Md. kabir uddin</h2>
        </div>
        {/* likn section */}
        <div className="">
          <ul
            className={`  overflow-hidden w-full ${
              isOpen ? "h-48" : "h-0"
            } absolute top-[49px] left-0 bg-navbar-primary transition-all duration-300 sm:static sm:flex sm:items-center sm:gap-x-3 sm:h-auto`}
          >
            {links?.map((link) => (
              <li key={link?.id} className=" w-full pt-2 text-center">
                <Link
                  href={link?.href}
                  onClick={handleIsClose}
                  className={` block py-1 whitespace-nowrap ${
                    router?.asPath === `/${link?.href}`
                      ? "text-orange-300 sm:hover:text-orange-300"
                      : "  sm:hover:text-gray-400"
                  } hover:bg-slate-600 sm:hover:bg-transparent  px-1 transition-all`}
                  scroll={false}
                >
                  {link?.name}
                </Link>
                {/* <a
                  href={link?.href}
                  onClick={handleIsClose}
                  className={` block py-1 whitespace-nowrap hover:bg-slate-600 sm:hover:bg-transparent  sm:hover:text-gray-400  px-1 transition-all`}
                >
                  {link?.name}
                </a> */}
              </li>
            ))}
          </ul>
          {/* menu section */}
          <div className=" sm:hidden">
            <button
              onClick={handleIsOpen}
              className=" rounded-md w-7 h-7 transition-all ease-in-out"
            >
              {!isOpen ? (
                <svg
                  className=" hover:text-orange-300"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Menu_Fries">
                    <path d="M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"></path>
                    <path d="M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"></path>
                    <path d="M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  className=" hover:text-orange-300"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                    fill="currentColor"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
