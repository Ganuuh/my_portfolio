import { title } from "process";
import React from "react";
import { FaReact } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Pinecone LLC",
    description:
      "I have worked at Pinecone LLC as an intern for 2 months. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB.",
    icon: React.createElement(FaReact),
    date: "Feb 2024 - May 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Invescore NBFI",
    description:
      "I am currently a full-stack developer at Invescore NBFI. My tech stack includes React, Next.js, TypeScript, Tailwind, Rust, Actix-Web, Diesel (ORM), Python, FastAPI, and Postgres. I am open to full-time opportunities. I have primarily worked on the backend side of the company's internal projects, which I do not have the privilege to share.",
    icon: React.createElement(FaReact),
    date: "June 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce",
    description:
      "Fully functional e-commerce website that includes complex funtionality and smooth workflow.",
    tags: ["React", "Next.js", "MongoDB", "Express", "MUI", "REST.API"],
    imageUrl: "/projects/ecommerce.png",
    prodUrl: "https://ecommerce-mo.vercel.app/",
  },
  {
    title: "Expense tracker",
    description:
      "I created a website that users can track their income and expenses using datas they provided.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Mongoose",
      "Tailwind",
      "Express.JS",
    ],
    imageUrl: "/projects/expenseTracker.png",
    prodUrl: "https://expense-tracker-mo.vercel.app/",
  },
  {
    title: "Food delivery",
    description:
      "A public web app for quick food delivery. It shows various foods for user based on category and sale percent that admin (Restaurant owner) added to their store.",
    tags: ["React", "Next.js", "Tailwind", "MongoDB", "GraphQL"],
    imageUrl: "/projects/fooddeliver.png",
    prodUrl: "https://food-delivery-mo.vercel.app/",
  },
  {
    title: "Microsoft Graph API integration",
    description:
      "Kiosk application that manages all visitors who came to visit or deliver to someone among microsoft tenant and send a message to them.",
    tags: ["Flutter", "Rust", "Actix-web", "Postgres", "Diesel(ORM)"],
    imageUrl: "/projects/microsoft.png",
    prodUrl: "",
  },
  {
    title: "Messenger Chatbot Integration",
    description:
      "Developed a sophisticated Messenger chatbot capable of both sending automated messages and seamlessly integrating with other company projects.",
    tags: [
      "Rust",
      "Actix-web",
      "Actix-web built-in WebSockets",
      "Postgres",
      "Diesel(ORM)",
    ],
    imageUrl: "/projects/chat_bot.png",
    prodUrl: "",
  },
  {
    title: "Application dashboard",
    description:
      "Developed the front-end of an application dashboard, enabling the management of users and directors, as well as  data management.",
    tags: ["Next.js", "Reat.js", "Tailwind", "Ant-Design"],
    imageUrl: "/projects/internal.png",
    prodUrl: "",
  },
  {
    title: "Automated PDF File Generation",
    description:
      "Contributed to the development of a Python-based solution that automates the generation of PDF documents.",
    tags: ["Python", "FastAPI", "docxtpl", "pdfkit"],
    imageUrl: "/projects/internal.png",
    prodUrl: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "GitLab",
  "Tailwind",
  "MongoDB",
  "Mongoose",
  "GraphQL",
  "Apollo",
  "Express",
  "Jest (Unit test)",
  "Cypress (end to end Test)",
  "Nx Monorepo",
  "Rust",
  "Actix-web",
  "Diesel(ORM)",
  "Postgres",
  "Flutter",
  "Python",
  "Fast-api",
] as const;
