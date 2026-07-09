import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaDatabase,
  FaCode,
  FaBrain,
  FaGithub,
  FaGitAlt,
  FaLaptopCode,
  FaFileCode,
  FaCube,
  FaPalette,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiAnthropic,
  SiWebflow,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { RiOpenaiFill } from "react-icons/ri";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "Web Development",
    info: [
      {
        title: "Frontend / Web",
        skills: [
          { name: "HTML5", icon: FaHtml5 },
          { name: "CSS3", icon: FaCss3 },
          { name: "JavaScript", icon: FaJs },
          { name: "React (Learning)", icon: FaReact },
          { name: "Next.js (Learning)", icon: SiNextdotjs },
        ],
      },
      {
        title: "Languages & Backend",
        skills: [
          { name: "Python", icon: FaPython },
          { name: "Java", icon: FaJava },
          { name: "C", icon: SiC },
          { name: "C++", icon: SiCplusplus },
          { name: "SQL", icon: FaDatabase },
        ],
      },
    ],
  },
  {
    title: "AI Development Tools",
    info: [
      {
        title: "AI Systems & Chatbots",
        skills: [
          { name: "Cursor AI", icon: FaCode },
          { name: "Antigravity", icon: FaBrain },
          { name: "Flow", icon: SiWebflow },
          { name: "ChatGPT", icon: RiOpenaiFill },
          { name: "Claude", icon: SiAnthropic },
        ],
      },
      {
        title: "Version Control & Dev Tools",
        skills: [
          { name: "GitHub", icon: FaGithub },
          { name: "Git", icon: FaGitAlt },
        ],
      },
    ],
  },
  {
    title: "Certifications",
    info: [
      {
        title: "Technical Certifications",
        skills: [
          { name: "C++ Programming Certification", icon: FaCode, link: "/C++.pdf" },
          { name: "Java Programming Certification", icon: FaCode, link: "/JAVA.pdf" },
          { name: "SQL Database Certification", icon: FaDatabase, link: "/SQL.pdf" },
          { name: "DBMS Certification", icon: FaDatabase, link: "/DBMS.pdf" },
        ],
      },
      {
        title: "Professional & Achievements",
        skills: [
          {
            name: "Outskill Professional Certification",
            icon: FaLaptopCode,
            link: "/Certificate_outskill.pdf",
          },
          {
            name: "Industrial Hackathon 2026 Winner",
            icon: FaLaptopCode,
            link: "/TechShala-Certificate-Manish-Nikam-Industrial-Hackathon-2026.pdf",
          },
        ],
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building modern websites with <span className="text-accent">code & AI</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-white/80"
          >
            Crafting premium digital experiences. Passionate Computer Engineering student crafting modern websites, immersive UI, and premium web experiences with code, creativity, and AI.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* years of learning */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  0<CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of learning.
                </div>
              </div>

              {/* personal projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Personal Projects.
                </div>
              </div>

              {/* technologies mastered */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Technologies Mastered.
                </div>
              </div>

              {/* passion for building */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} />%
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Passion for building.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-6 items-center xl:items-start overflow-y-auto max-h-[380px] pr-2 scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10 w-full">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col items-center xl:items-start w-full gap-y-2"
              >
                {/* Sub-category Title */}
                <div className="font-semibold text-white tracking-[1px] uppercase text-xs">
                  {item.title}
                </div>

                {/* Skills Badges (Horizontal Row) */}
                <div className="flex flex-wrap gap-2 justify-center xl:justify-start w-full">
                  {item.skills?.map((skill, skillI) => {
                    const Icon = skill.icon;
                    const badge = (
                      <div
                        className={`flex items-center gap-x-2 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 hover:bg-white/10 hover:border-accent/40 transition-all duration-300 group ${
                          skill.link ? "cursor-pointer" : "cursor-default"
                        }`}
                      >
                        <Icon className="text-lg text-white group-hover:text-accent transition-colors duration-300" />
                        <span className="text-xs text-white/70 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    );

                    if (skill.link) {
                      return (
                        <a
                          key={skillI}
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-none"
                        >
                          {badge}
                        </a>
                      );
                    }

                    return (
                      <div
                        key={skillI}
                        className="flex items-center gap-x-2 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 hover:bg-white/10 hover:border-accent/40 transition-all duration-300 group cursor-default"
                      >
                        <Icon className="text-lg text-white group-hover:text-accent transition-colors duration-300" />
                        <span className="text-xs text-white/70 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

