import { GitBranchPlus, Github, Instagram, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div>
      <div className="max-h-screen flex flex-col justify-center items-center mt-32">
        <div className="flex flex-col md:flex-row md:gap-24 sm:gap-x-10 px-5 md:justify-center justify-around items-center w-full">
          <div className="flex flex-col text-center md:text-left">
            <p className="leading-7 [&:not(:first-child)]:mt-6 lg:text-xl">
              Hi! My name is
            </p>
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
              Gaddam Rohith
            </h1>
            <p className="text-xl text-muted-foreground mt-4 ">
              I&apos;m{" "}
              <span className="text-xl font-semibold text-black tracking-tight">
                frontend developer
              </span>{" "}
              and{" "}
              <span className="text-xl font-semibold text-black tracking-tight">
                Generative AI
              </span>{" "}
              Enthusiast
            </p>
            <div className="md:flex sm:hidden sm:justify-center my-3 md:justify-start mt-6">
              <a href="https://drive.google.com/file/d/1hpxJAKruNNOAfLpPiGRTrUclWj1n-EgX/view?usp=drive_link" target="_blank"><button className="rounded-full border border-black p-2 px-4">
                Resume
              </button></a>
            </div>
            
          </div>
          <div className="flex flex-col items-center mt-6 md:mt-0 md:flex-row">
            <Image
              src="Hero.svg"
              alt="hero"
              width={300}
              height={300}
              className="rounded-full"
            />
            <div className="mt-6 md:mt-0 md:ml-6">
              <button className="md:hidden rounded-full border border-black p-2 px-4">
                Resume
              </button>
            </div>
          </div>
          
        </div>
      </div>
      <div className="flex px-3 mt-20   ">
      <hr className="flex-grow border-t-[3px] border-black ml-20 m-2" />
        <span className="mx-2 text-xl font-semibold text-lightBlue-500"><Link href="https://www.instagram.com/rohitgoud_27/" target="_blank"><Instagram  /> </Link></span>
        <span className="mx-2 text-xl font-semibold text-lightBlue-500"> <Link href="https://www.linkedin.com/in/rohith-gaddam/" target="_blank"><LinkedinIcon/> </Link></span>
        <span className="mx-2 text-xl font-semibold text-lightBlue-500"> <Link href="https://github.com/rohit27-2" target="_blank"><Github /></Link> </span>
        <hr className="flex-grow border-t-[3px] border-black mr-20 m-2" />
      </div>
    </div>
  );
}

export default Hero;
