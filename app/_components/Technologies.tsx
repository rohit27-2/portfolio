import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { app } from "@/firebaseConfig";
import PopUpDetails from "./PopUp";
import Image from "next/image";

function TechProfile() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Check out What I&apos;`m good at.
      </h1>
      <div className="flex items-center justify-between border border-gray-300 p-4 rounded-lg ">
        <div>
          <p className="font-semibold text-2xl">Technologies</p>
        </div>
      </div>
      <div className="border border-gray-300 p-4 mt-4 rounded-lg">
        <Image src={"/assets/images/git.svg"} alt={'git'} width={50} height={50} />
      </div>
    </div>
  );
}

export default TechProfile;
