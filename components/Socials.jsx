import Link from "next/link";
import { HiArrowDownTray } from "react-icons/hi2";

import {
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/manish-nikam",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/manishnikam0908",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}

      {/* Download Resume Button */}
      <a
        href="/Manish_Nikam_Resume.pdf"
        download="Manish_Nikam_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-x-2 text-xs font-semibold tracking-wider uppercase border border-white/40 hover:border-accent bg-white/5 hover:bg-accent/15 px-3.5 py-1.5 rounded-full transition-all duration-300 text-white hover:text-accent group shadow-sm cursor-pointer ml-1"
        title="Download Resume"
      >
        <span>Resume</span>
        <HiArrowDownTray className="text-sm group-hover:translate-y-0.5 transition-transform duration-300 text-accent" aria-hidden />
      </a>
    </div>
  );
};

export default Socials;
