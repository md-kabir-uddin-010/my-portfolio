import Navbar from "@/components/Navbar";
import Head from "next/head";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { motion, useScroll } from "framer-motion";
import { Poppins } from "next/font/google";
const popins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      {/* head start */}
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Md Kabir Uddin - Portfolio Website</title>
      </Head>
      {/* head end */}
      {/* navbar start */}
      <nav className={` ${popins.className} w-full fixed top-0 left-0`}>
        <Navbar />
        <div className=" relative w-full h-4  ">
          <motion.div
            className="absolute top-0 left-0 right-0 h-[3px] bg-sky-500 transform origin-[0%]"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </nav>
      {/* navbar end */}
      {/* main section start */}
      <main className={` ${popins.className} mt-16 `}>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      {/* main section end */}
      {/* footer start */}
      <footer className=" py-10">
        <Footer />
      </footer>
      {/* footer end */}
    </>
  );
}
