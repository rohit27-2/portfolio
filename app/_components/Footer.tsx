import React from "react";

function Footer() {
  return (
    <div>
      

      <footer className="bg-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 rounded-lg bg-indigo-600 p-6 shadow-lg sm:flex-row sm:justify-between">
            <strong className="text-xl text-white sm:text-xl">
              {" "}
              Wanna Hire Me!{" "}
            </strong>

            <a
              className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-indigo-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
              href="#"
            >
              <span className="text-sm font-medium"> Let&apos;s Get Started </span>

              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          

          <div className="mt-8">
            

            <div className="mt-16 sm:flex sm:items-center sm:justify-between">
              <div className="flex justify-center text-blue-600 sm:justify-start">
              <p className='text-blue-500 font-bold mt-2  px-20'>&lt; Gaddam Rohith /&gt;</p>
              </div>

              <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
                Copyright &copy; 2024. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
