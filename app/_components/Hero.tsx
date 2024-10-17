'use client'
import { GitBranchPlus, Github, Instagram, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ResumeModal from "./ResumeModal";
import { motion } from "framer-motion";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="max-h-screen flex flex-col justify-center items-center mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:gap-24 sm:gap-x-10 px-5 md:justify-center justify-around items-center w-full"
        >
          <div className="flex flex-col text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="leading-7 [&:not(:first-child)]:mt-6 lg:text-xl"
            >
              Hi! My name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl"
            >
              Gaddam Rohith
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xl text-muted-foreground mt-4"
            >
              I&apos;m{" "}
              <span className="text-xl font-semibold text-black tracking-tight">
                Frontend developer
              </span>{" "}
              and{" "}
              <span className="text-xl font-semibold text-black tracking-tight">
                Generative AI
              </span>{" "}
              Enthusiast
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="md:flex sm:hidden sm:justify-center my-3 md:justify-start mt-6"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-full border border-black p-2 px-4 hover:bg-black hover:text-white transition-colors duration-300"
              >
                Resume
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col items-center mt-6 md:mt-0 md:flex-row"
          >
            <Image
              src="Hero.svg"
              alt="hero"
              width={300}
              height={300}
              className="rounded-full"
            />
            <div className="mt-6 md:mt-0 md:ml-6">
              <button className="md:hidden rounded-full border border-black p-2 px-4 hover:bg-black hover:text-white transition-colors duration-300">
                Resume
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex px-3 mt-20"
      >
        <hr className="flex-grow border-t-[3px] border-black ml-20 m-2" />
        <motion.span whileHover={{ scale: 1.2 }} className="mx-2 text-xl font-semibold text-lightBlue-500">
          <Link href="https://www.instagram.com/rohitgoud_27/" target="_blank"><Instagram /></Link>
        </motion.span>
        <motion.span whileHover={{ scale: 1.2 }} className="mx-2 text-xl font-semibold text-lightBlue-500">
          <Link href="https://www.linkedin.com/in/rohith-gaddam/" target="_blank"><LinkedinIcon /></Link>
        </motion.span>
        <motion.span whileHover={{ scale: 1.2 }} className="mx-2 text-xl font-semibold text-lightBlue-500">
          <Link href="https://github.com/rohit27-2" target="_blank"><Github /></Link>
        </motion.span>
        <hr className="flex-grow border-t-[3px] border-black mr-20 m-2" />
      </motion.div>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Hero;
