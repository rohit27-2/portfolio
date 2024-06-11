
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { app } from "@/firebaseConfig";
import PopUpDetails from "./PopUp";

function ProfileCard() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Get to know me better.</h1>
      <div className="flex items-center justify-between border border-gray-300 p-4 rounded-lg ">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/hero.png" />
            <AvatarFallback>Image</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Rohit Gaddam</p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="p-2">
            <PopUpDetails />
          </button>
          <p>Liked by 0 others</p>
        </div>
      </div>
      <div className="border border-gray-300 p-4 mt-4 rounded-lg">
        <p className="mb-4">
          In 2022, I graduated as{" "}
          <span className="font-semibold">frontend developer</span> at
          Coderhouse while also studying Biological Sciences at the University
          of Buenos Aires. That same year, my partner and I decided to move to
          Spain, so I had to temporarily leave my university studies to live
          here. I have{" "}
          <span className="font-semibold">one year of experience</span> creating
          responsive websites, and I currently work as a freelancer. Along this
          journey, I realized my passion for{" "}
          <span className="font-semibold">UX/UI design</span>, so now I&apos;m
          studying in this area to complement my design skills with development.
        </p>
        <ul className="list-disc pl-5">
          <li>🎨 I love drawing and painting.</li>
          <li>🧬 I’m a very curious person, so I like biology and science.</li>
          <li>🎧 My favorite music genre is R&B, I listen to music a lot.</li>
          <li>🎬 Love to spend time watching movies and TV shows.</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
