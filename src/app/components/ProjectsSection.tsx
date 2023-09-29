"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Transcendence",
    description: "My flagship project, Transcendence, is a complex online platform based on the classic Pong game, showcasing my skills in real-time features and modern tech stacks like NestJS and NextJS.",
    image: "/images/projects/Transcendence.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AchelDrinker/Transcendence",
    previewUrl: "/#projects",
  },
  {
    id: 2,
    title: "Internet Relay Chat",
    description: "The IRC project is a C++98 server designed for scalability and security. It supports multiple clients, password authentication, and a range of IRC commands, operating over TCP/IP with IPv4 and IPv6 compatibility.",
    image: "/images/projects/IRC.png",
    tag: ["All", "Back-end"],
    gitUrl: "https://github.com/AchelDrinker/ft_irc",
    previewUrl: "/#projects",
  },
  {
    id: 3,
    title: "Linear Regression",
    description: "This project is a simple yet effective implementation of linear regression in Python. Using leading libraries like numpy for numerical calculations and matplotlib for visualization, this project serves as an excellent starting point for anyone interested in Machine Learning.",
    image: "/images/projects/Linear_Regression.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/AchelDrinker/ft_linear_regression",
    previewUrl: "/#projects",
  },
//   {
//     id: 4,
//     title: "Food Ordering Application",
//     description: "Project 4 description",
//     image: "/images/projects/4.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "/#projects",
//   },
//   {
//     id: 5,
//     title: "React Firebase Template",
//     description: "Authentication and CRUD operations",
//     image: "/images/projects/5.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/#projects",
//   },
//   {
//     id: 6,
//     title: "Full-stack Roadmap",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/#projects",
//   },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

const handleTagChange = (newTag: string) => {
    setTag(newTag);
};

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Back-end"
          isSelected={tag === "Back-end"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;