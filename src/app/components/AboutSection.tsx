"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C</li>
        <li>C++</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>PostgreSQL</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>2022- ... : Ecole 42</li>
        <li>2017 - 2019 : CNAM - Master&apos;s degree in Business-Marketing</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>English : EFSET : 77/100 (C2)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
        src="/images/logo-42-mulhouse.png"
        alt="hugo_martineu_about"
        width={1926}
        height={804} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Transitioning from a senior marketing role to computer science through an intensive course at École 42, I bring a unique blend of expertise in project management, strategy, and leadership. Proficient in C, C++, Python, and other modern technologies, my goal is to specialize in Data Science to leverage data for business performance.
            <br/>
            My flagship project, &apos;Transcendence&apos;, is a complex online platform based on the classic Pong game, showcasing my skills in real-time features and modern tech stacks like NestJS and NextJS.
            <br/>
            I&apos;m seeking a 4-6 month internship to apply my cross-disciplinary skills and contribute to meaningful projects. Contact me for opportunities aligning with this profile, as I&apos;m keen to add value by bridging business and technology.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;