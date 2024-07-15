import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import ProfileCard from "./_components/ProfileCard";
import profileData from './_components/content.json';
import TechProfile from "./_components/Technologies";
export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <ProfileCard
        name={profileData.name}
        avatarSrc={profileData.avatarSrc}
        bio={profileData.bio}
        details={profileData.details}
        likes={profileData.likes}
        hobbies={profileData.hobbies}
      />
      <TechProfile  />
    </div>
  );
}
