"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
    dots: true,  // Show navigation dots
    infinite: true,  // Infinite loop
    speed: 500,  // Transition speed
    slidesToShow: 3,  // Display three slides at a time
    slidesToScroll: 1,  // Scroll one slide at a time
};



const projectsData = [
    {
        id: 1,
        title: "Face Authentication System",
        description: "I engineered a user-friendly system that enables individuals to register their faces using a webcam. This technology not only facilitates secure and convenient logins through facial recognition but also empowers users to safeguard their confidential data once logged in. It represents a significant advancement in data protection and user privacy.",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/SrajanAgrawal/FAuth",
        previewUrl: "https://www.youtube.com/watch?v=FHChUpH-NI8",
        price: "Price: $1000"
    },
    {
        id: 2,
        title: "To-Do List Application",
        description: "Hey there! Check out my cool web app for managing daily tasks. It's super handy because it saves your tasks securely, and it looks really nice too! You can use it on your computer or phone because it's fully responsive. Tech stack: HTML, CSS, JavaScript.",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/SrajanAgrawal/MYTODOLIST",
        previewUrl: "https://srajanagrawal.github.io/MYTODOLIST/",
        price: "Price: $2000"
    },

    {
        id: 3,
        title: "Social Media Integration",
        description: "Developed a compact web application allowing convenient sign-in via popular social platforms like Google and Facebook. Created using HTML, CSS, JavaScript, and APIs, with integration of Google and Facebook authentication.",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/SrajanAgrawal/SocialMediaIntegration",
        previewUrl: "https://srajanagrawal.github.io/SocialMediaIntegration/",
        price: "Price: $90"
    },

    {
        id: 4,
        title: "ChatBot || Dialogflow",
        description: "Using Google Cloud, I created a cool web interface with React. It talks smoothly with a chatbot through Kommunicate, making it easy for users to chat. But wait, there's more! I'm working on making it even cooler with new features. Stay tuned for updates that will make this project even better!",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "Design"],
        gitUrl: "https://github.com/SrajanAgrawal/ChatBot-DialogFlow-React-Kommunicate",
        previewUrl: "https://chat-bot-dialog-flow-react-kommunicate-5mhil80oz-srajanagrawal.vercel.app/",
        price: "Price: $10"
    },

    {
        id: 5,
        title: "React Firebase Template",
        description: "Authentication and CRUD operations",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
        price: "Price: $8"
    },
    {
        id: 6,
        title: "Full-stack Roadmap",
        description: "Project 5 description",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
        price: "Price: $66"
    },
    {
        id: 7,
        title: "Full-stack Android",
        description: "Project 5 description",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "Android"],
        gitUrl: "/",
        previewUrl: "/",
        price: "Price: $77"
    },
    {
        id: 8,
        title: "Full-stack Frontend",
        description: "Project 5 description",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "Frontend"],
        gitUrl: "/",
        previewUrl: "/",
        price: "Price: $9"
    },
    {
        id: 9,
        title: "Full-stack IOS",
        description: "Project 5 description",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "IOS"],
        gitUrl: "/",
        previewUrl: "/",
        price: "Price: $78"
    },
    {
        id: 10,
        title: "Full-stack Backend",
        description: "Project 5 description",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "Backend"],
        gitUrl: "/",
        previewUrl: "/",
        price: "Price: $88"
    },
    {
        id: 11,
        title: "Full-stack Blockchain",
        description: "Project 5 description",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "Blockchain"],
        gitUrl: "/",
        previewUrl: "/",
        price: "Price: $467"
    },
    {
        id: 12,
        title: "Full-stack AI/ML",
        description: "Project 5 description",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "AI/ML"],
        gitUrl: "/",
        previewUrl: "/",
        price: "Price: $45"
    },
    {
        id: 11,
        title: "Full-stack Chatgpt",
        description: "Project 5 description",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh5Y_gJ6uspsMWYtVxmGySc46EPbUkiTXdw_5vJzBRx61chOWX",
        tag: ["All", "Chatgpt"],
        gitUrl: "/",
        previewUrl: "/",
        price: "Price: $89"
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
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
        <section id="projects" className="px-12 bg-black">
            <h2 className="text-center text-5xl pt-4 font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex  pb-6 overflow-x-auto m-auto mb-12" style={{ maxWidth: '1000px' }}>
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
                    name="Design"
                    isSelected={tag === "Design"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Android"
                    isSelected={tag === "Android"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="IOS"
                    isSelected={tag === "IOS"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Frontend"
                    isSelected={tag === "Frontend"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Backend"
                    isSelected={tag === "Backend"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Blockchain"
                    isSelected={tag === "Blockchain"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="AI/ML"
                    isSelected={tag === "AI/ML"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Chatgpt"
                    isSelected={tag === "Chatgpt"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Automation"
                    isSelected={tag === "Automation"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Game Development"
                    isSelected={tag === "Game Development"}
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
              price={project.price}
            />
          </motion.li>
        ))}
      </ul>
            {/* <Slider {...sliderSettings}>
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
  </Slider> */}
            {/* <Slider {...sliderSettings}>
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
            </Slider> */}
        </section>
    );
};

export default ProjectsSection;
