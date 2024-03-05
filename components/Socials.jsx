"use client";

import { RiLinkedinFill, RiGithubFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/abhimantra-pandya-nandi-wardhana-648691287/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/AbhimantraPNW",
    name: <RiGithubFill />,
  },
  {
    path: "https://twitter.com/abhimantrapandy",
    name: <RiTwitterFill />,
  },
  {
    path: "https://instagram.com/abhimantrapnw",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
