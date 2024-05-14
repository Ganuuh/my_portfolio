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
      "I'm now a full-stack developer working as a intern at Pinecone Academy. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Feb 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce",
    description:
      "Fully functional e-commerce website that includes complex funtionality and smooth workflow.",
    tags: ["React", "Next.js", "MongoDB", "Express", "MUI" , "REST.API"],
    imageUrl: "/projects/ecommerce.png",
    prodUrl : "https://team2-omae.vercel.app/"
  },
  {
    title: "Expense tracker",
    description:
      "I created a website that users can track their income and expenses using datas they provided.",
    tags: ["React", "TypeScript", "Next.js", "Mongoose", "Tailwind", "Express.JS"],
    imageUrl: "/projects/expenseTracker.png",
    prodUrl : "https://expense-tracker-9pdt.vercel.app/",
  },
  {
    title: "Food delivery",
    description:
      "A public web app for quick food delivery. It shows various foods for user based on category and sale percent that admin (Restaurant owner) added to their store.",
    tags: ["React", "Next.js", "Tailwind", "MongoDB" , "GraphQL"],
    imageUrl: "/projects/fooddeliver.png",
    prodUrl : "https://food-delivery-teal-rho.vercel.app/",
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
  "Nx Monorepo"
] as const;
