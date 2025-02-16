import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "abouts"]').then((data) => setAbouts(data));
  }, []);

  const services = [
    {
      title: "Frontend Development",
      description:
        "I create modern, responsive interfaces with Vue.js, React.js, and Next.js.",
    },
    {
      title: "Backend Development",
      description: "I build secure and scalable systems using Laravel & PHP.",
    },
    {
      title: "API Integration",
      description: "I develop and integrate RESTful & GraphQL APIs seamlessly.",
    },
    {
      title: "Full-Stack Solutions",
      description:
        "I deliver end-to-end web applications from concept to deployment.",
    },
  ];

  return (
    <>
      <h2 className="head-text">
        <span>Software</span> is only as strong as <br />
        <span>the developer</span> who builds it.
      </h2>

      <div className="app__about-container">
        <motion.div
          className="app__about-services"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="app__about-service"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="app__about-service-icon">
                <FaArrowAltCircleRight />
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="app__about-description"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="head-text">
            <span>About Me</span>
          </h2>
          <p>
            I am Dagem Gissila, a **Full-Stack Developer** skilled in **Vue.js,
            React.js, Next.js, PHP, and Laravel**. I craft sleek **frontend
            interfaces**, build **scalable backends**, and integrate APIs to
            create powerful digital experiences. Passionate about clean code and
            performance optimization, I strive to develop innovative solutions.
          </p>
          <motion.button
            className="app__about-cv-button"
            whileHover={{ scale: 1.1 }}
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
