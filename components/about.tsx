"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-3 flex flex-col gap-4">
        <p className="font-bold text-gray-400">
          Hello there! 👋 I'm Ganbold, a passionate MERN stack developer with a
          flair for crafting sleek and efficient web applications. With a strong
          foundation in MongoDB, Express.js, React.js, and Node.js, I thrive on
          bringing creative ideas to life through clean, maintainable code.
        </p>
        <span className="font-bold text-gray-400">
          My journey in the world of programming began with a curiosity to
          understand how things work behind the scenes on the web. This
          curiosity blossomed into a full-fledged passion, leading me to dive
          deep into the intricacies of front-end and back-end development.
          Outside of coding, you'll find me exploring the latest tech trends,
          experimenting with new frameworks, or simply enjoying a good cup of
          coffee while brainstorming my next big idea. I thrive in fast-paced
          environments where innovation is encouraged and challenges are
          embraced.
        </span>
        <p className="font-bold text-gray-400">
          Whether you're a startup looking to disrupt the industry or an
          established enterprise seeking to modernize your digital presence, I'm
          here to help you turn your vision into reality. Let's build something
          amazing together!
        </p>
      </div>
    </motion.section>
  );
}
