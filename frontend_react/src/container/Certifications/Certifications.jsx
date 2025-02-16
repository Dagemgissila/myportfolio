import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Certifications.scss";

const Certifications = () => {
  const [certs, setCerts] = useState([]);
  const [filterCerts, setFilterCerts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setCerts(data);
      setFilterCerts(data);
    });
  }, []);

  const handleFilter = (tag) => {
    setActiveFilter(tag);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (tag === "All") {
        setFilterCerts(certs);
      } else {
        setFilterCerts(certs.filter((item) => item.tags.includes(tag)));
      }
    }, 500);
  };

  return (
    <div className="app__certifications">
      <h2 className="head-text">
        My <span>Certifications</span> Section
      </h2>

      {/* Certification cards */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__certification-portfolio"
      >
        {filterCerts.map((cert, index) => (
          <div className="app__certification-item" key={index}>
            <div className="app__certification-img app__flex">
              <img src={urlFor(cert.imgUrl)} alt={cert.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__certification-hover app__flex"
              />
            </div>

            <div className="app__certification-content app__flex">
              <h4 className="bold-text">{cert.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Certifications, "app__certifications"),
  "certifications",
  "app__primarybg"
);
