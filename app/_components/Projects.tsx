import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

function Projects() {
  return (
    <div className="mt-8 p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl text-center font-bold mb-6">
        Check out my Projects.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <Image
            src="/project-tech.jpg"
            alt=""
            width={500}
            height={300}
            className="h-56 w-full hover:scale-105 object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Freelance - Website</span>
            <time dateTime="2022-10-10" className="block text-xs text-gray-500 mt-2">
              22nd July 2024
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
          <Image
            src="/liv.png"
            alt=""
            width={500}
            height={300}
            className="h-56 w-full hover:scale-105  object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Freelance - Website</span>
            <time dateTime="2022-10-10" className="block text-xs text-gray-500 mt-2">
              14th July 2024
            </time>

            <h3 className="mt-0.5 text-lg text-gray-900">
              Liv Emergency
            </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Trusted Care when
Every Moment Matters
Receive immediate, expert medical attention when you need it most. Our advanced technology and dedicated healthcare professionals are here to support you in critical times.
            </p>
            <a href="https://liv-taupe.vercel.app/" target="_blank">
              <Button className="rounded-full mr-5 mt-4">Visit Now!</Button>
            </a>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <Image
            src="/project-aga.jpg"
            alt=""
            width={500}
            height={300}
            className="h-56 w-full object-cover hover:scale-105"
          />

          <div className="bg-white p-4 sm:p-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Freelance - Website</span>
            <time dateTime="2022-10-10" className="block text-xs text-gray-500 mt-2">
              22nd July 2024
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

        
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <Image
            src="/femica.jpg"
            alt=""
            width={500}
            height={300}
            className="h-56 w-full hover:scale-105 object-cover"
          />
          <div className="bg-white p-4 sm:p-6">
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">AI and GenAI</span>
            <time dateTime="2024-08-01" className="block text-xs text-gray-500 mt-2">
              1st August 2024
            </time>
            <h3 className="mt-0.5 text-lg text-gray-900">
              Famica AI - Women&apos;s Wellness Platform
            </h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              A cutting-edge web application for women&apos;s wellness, built with React and Firebase, offering personalized health tracking and AI-powered insights.
            </p>
            <a href="https://femica-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full mr-5 mt-4">Try Now!</Button>
            </a>
          </div>
        </article>
        
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <Image
            src="/movie.jpg"
            alt="Movie Recommendation System"
            width={500}
            height={300}
            className="h-56 w-full hover:scale-105 object-cover"
          />
          <div className="bg-white p-4 sm:p-6">
            <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">AI - Machine Learning</span>
            <time dateTime="2024-03-15" className="block text-xs text-gray-500 mt-2">
              15th March 2024
            </time>
            <h3 className="mt-0.5 text-lg text-gray-900">
              Movie Recommendation System
            </h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              A Python-based movie recommendation system using machine learning algorithms to suggest personalized movie choices based on user preferences.
            </p>
            <a href="https://github.com/rohit27-2/Movie-Recommendation" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full mr-5 mt-4">View Project</Button>
            </a>
          </div>
        </article>
        
      </div>
    </div>
  );
}

export default Projects;
