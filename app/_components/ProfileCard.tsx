import { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PopUpDetails from "./PopUp";

interface ProfileCardProps {
  name: string;
  avatarSrc: string;
  bio: string;
  details: string;
  likes: number;
  hobbies: string[];
}

const ProfileCard: FC<ProfileCardProps> = ({ name, avatarSrc, bio, details, likes, hobbies }) => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{details}</h1>
      <div className="flex items-center justify-between border border-gray-300 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>Image</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Rohith Gaddam</p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="p-2">
            <span role="img" aria-label="like">
              ❤️
            </span>
          </button>
          <p> by Startups</p>
        </div>
      </div>
      <div className="border border-gray-300 p-4 mt-4 rounded-lg">
        <p className="mb-4">I&apos;m Rohith, an undergraduate final-year student at Anurag University.I started my journey as a web developer and slowly expanded my skills to Flutter and Django Full Stack Development.<br /><br/>But my interest grew in Front-end Development and Cloud Computing.I&apos;ve been the Google Developer Student Club Lead for the year 2023-2024.The journey has been amazing throughout the year.<br/><br/>I also founded an Edtech startup, &quot;Newbie Learning.&quot; We grew to a 5000+ developer community within 2 months.\n\nWe started to take online workshops, webinars, and bootcamps to upskill our community.<br /> Now I&apos;m studying in this area to complement my skills with development.</p>
        <ul className="list-disc pl-5">
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
