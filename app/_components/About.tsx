import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";

function About() {
  return (
    <div className="m-14 lg:m-20">
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight m-2">
        <u> About</u>
      </h2>

      <div className="flex flex-col justify-start  ">
        <div className="box-border h-2/5 w-66 border-4 border-black ">
          <h2 className="p-4">Get to now me better</h2>
          <hr className="border-2 border-black" />
          <div className="flex justify-around  items-center">
            <div className="flex gap-3 items-center">
              <Avatar>
                <AvatarImage src="/hero.png" />
                <AvatarFallback>Image</AvatarFallback>
              </Avatar>
              <p>Rohith Gaddam</p>
            </div>
            <div className="w-[3px] h-14 bg-black mx-4"></div>
            <div>
              <p>
                ❤️ Liked by{" "}
                <span className="font-bold">
                  <u>you</u>
                </span>{" "}
                and 6 others
              </p>
            </div>
          </div>
          <hr className="border-2 border-black" />
          <div className="flex justify-around items-center">
            <div>
              <p>👨‍💻 Software Engineer</p>
              <p>📍 Hyderabad, India</p>
            </div>
            <div>
              <p>📅 Joined in 2021</p>
              <p>📈 1.5K followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
