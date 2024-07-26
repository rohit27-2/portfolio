import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import { Button } from "@/components/ui/button";

function Projects() {
  return (
    <div className="mt-8 p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Check out my Freelance Projects.
      </h1>
      <div className="flex flex-col gap-10">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="project-tech.jpg"
            className="h-56 w-full hover:scale-105 object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              22nd July 2024{" "}
            </time>

            <h3 className="mt-0.5 text-lg text-gray-900">
              Technopolis - Real Estate Website
            </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              A Real Estate Website built with Next.js, Tailwind CSS and
              Firebase.
            </p>
            <a href="https://technopolis-two.vercel.app/" target="_blank">
              <Button className="rounded-full mr-5 mt-4">Visit Now!</Button>
            </a>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="project-pix.jpg"
            className="h-56 w-full hover:scale-105  object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              14th July 2024{" "}
            </time>

            <h3 className="mt-0.5 text-lg text-gray-900">
              Pixieus - Transform your events with pixieus
            </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              A Event Management Website built with Next.js, Tailwind CSS and
            </p>
            <a href="https://pix-elit-celer.vercel.app/" target="_blank">
              <Button className="rounded-full mr-5 mt-4">Visit Now!</Button>
            </a>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="project-aga.jpg"
            className="h-56 w-full object-cover hover:scale-105"
          />

          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              22nd July 2024{" "}
            </time>

            <h3 className="mt-0.5 text-lg text-gray-900">
              Agastya - Hydrogen Energy Fuel Cell Energy Company
            </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              A Hydrogen Energy Fuel Cell Energy Company Website built with
              Next.js, Tailwind CSS and Firebase.
            </p>
            <a href="https://agastya-ect.netlify.app/" target="_blank">
              <Button className="rounded-full mr-5 mt-4">Visit Now!</Button>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Projects;
