import {
  nitk,
  googleCloud,
  hackerrank,
  ibm,
  kspIcon,
  coding_platform_image,
  movie_app_image,
  gemini_clone,
  movie_ticket_booking
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress
} from "react-icons/si";

import { SiPostman } from "react-icons/si";

export const resumeLink = "https://docs.google.com/document/d/1Z9H8GUAEK-VxI_h3Cj5449EsCSZG4070FQyGIoMPfJA/edit?tab=t.0";
export const repoLink = "https://github.com/ManiKandan228/personal-portfolio.git";

export const callToAction = "https://www.linkedin.com/in/manikandan-p-41b320246/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
];


export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "Saveetha Engineering College, Kanchipuram",
    degree: "Bachelor of Engineering",
    duration: "September 2021 - May 2025",
    content1: "Major: Computer Science and Engineering",
  },

];

export const achievements = [
  {
    id: "a-1",
    icon: googleCloud, 
    event: "Google Cloud Associate Cloud Engineer Course",
    position: "Proficient in designing, implementing, and managing cloud solutions on Google Cloud Platform",
    content1: "Completed comprehensive course on Google Cloud technologies",
    content2: "Skilled in cloud architecture and deployment",
    project: "https://www.cloudskillsboost.google/public_profiles/e384f2d7-e72b-4610-9fc3-cf332e4a5e7d",
  },
  
  {
    id: "a-2",
    icon: ibm,
    event: "IBM Datathon",
    position: "Team Leader",
    content1: "Applied data analysis and machine learning to predict gold prices",
    content2: "Collaborated on feature identification and model development",
    content3: "Presented insights to industry experts, demonstrating data science proficiency",
    project: "https://github.com/ManiKandan228/Gold-Price-Prediction",
    youtube: "https://www.youtube.com/watch?v=n_MDjznJ5jI",
  },
  
  {
    id: "a-3",
    icon: hackerrank, 
    event: "HackerRank SQL",
    position: "Gold Badge - Rank 1",
    content1: "Achieved Gold Badge in SQL, demonstrating strong proficiency",
    project: "https://www.hackerrank.com/profile/Mani_22",
  },
  
  {
    id: "a-4",
    icon: hackerrank, 
    event: "HackerRank C++",
    position: "Gold Badge - Rank 1",
    content1: "Achieved Gold Badge in C++, demonstrating strong proficiency",
    project: "https://www.hackerrank.com/profile/Mani_22",
  },
  {
    id: "a-5",
    icon: kspIcon,
    event: "KSP Datathon 2024",
    position: "Team Lead - Runner",
    content1: "Ranked among top 20 teams out of 60k+ registrations",
    content2: "Focused on accident data analysis",
    project: "https://drive.google.com/drive/folders/1DRy1IYkIqOxl7Hl883srNGgGE-0K1F8M",
    },
];

export const skillsData = [
  { name: 'Java', image: 'java' },
  { name: 'C++', image: 'cplusplus'},
  { name: 'HTML', image: 'html' },
  { name: 'CSS', image: 'css' },
  { name: 'Javascript', image: 'javascript' },
  { name: 'React', image: 'react' },
  { name: 'Node', image: 'nodejs' },
  { name: 'Express', image: 'expressjs' },
  { name: 'MongoDB', image: 'mongodb' },
  { name: 'Tailwind', image: 'tailwind' },
  { name: 'MySQL', image: 'mysql' },
  { name: 'Git', image: 'git' },
  { name: 'AWS', image: 'aws' },
  { name: 'Firebase', image: 'firebase' },
  { name: 'MaterialUI', image: 'materialui' },
  { name: 'Postman', image: 'postman' },
];



export const projects = [
  {
    id: "project-1",
    title: "CompileX - Coding Platform",
    github: "https://github.com/ManiKandan228/code-compiler-server",
    link: "https://compilex-client.vercel.app/",
    image: coding_platform_image,
    content:
      "Developed and continuously evolving an online coding platform using the MERN stack, enabling users to solve complex algorithmic challenges and submit code solutions. Implemented an admin panel for real-time tracking and management of user submissions and problem entries, streamlining code evaluation and system scalability.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-4",
        icon: SiExpress,
        name: "Express"
      }
    ],
  },
  
  {
    id: "project-2",
    title: "Movie Web Application",
    github: "https://github.com/ManiKandan228/Movie-Rating-Back-end",
    link: "https://movie-rating-app-xi.vercel.app/",
    image: movie_app_image,
    content:
      "Developed a dynamic movie rating web application using the MERN stack, enabling users to search, view, and rate movies. Integrated a robust admin panel for seamless management of movie entries.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-4",
        icon: SiExpress,
        name: "Express"
      }
    ],
  },  
  {
    id: "project-3",
    title: "Gemini Clone",
    github: "https://github.com/ManiKandan228/gemini-clone",
    link: "https://gemini-clone-seven-peach.vercel.app/",
    image: gemini_clone, 
    content: "A Gemini website clone built using React.js and integrated with a live API for real-time data.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiPostman,
        name: "API"
      },
    ],
  },
  
  {
    id: "project-4",
    title: "Movie Ticket Booking Backend",
    github: "https://github.com/ManiKandan228/Movie-Ticket-Booking-Backend-Task",
    image: movie_ticket_booking,
    content: "A backend system for a movie ticket booking platform with user and admin functionalities. Users can search for movies, book tickets, and manage bookings, while admins can manage movies, theaters, and track all bookings.",
    stack: [
      {
        id: "icon-1",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "Express"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB"
      },
    ],
  },
  
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];


export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/manikandan-p-41b320246/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/ManiKandan228",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:manipachiyappan111@gmail.com",
  },

];

export const aboutMe = {
    name: "Manikandan",
    githubUsername: 'ManiKandan228',
    tagLine: "MERN Stack Developer | Backend Developer | Computer Science Student",
    intro: "A passionate Software Developer from India, always crafting new solutions or chasing the spark of the next great idea."
}

export const itemsToFetch = 20;

export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];