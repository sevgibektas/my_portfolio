import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Workintech",
    descriptionKey: "project1Desc",
    techStack: ["react", "redux", "vercel"],
    img: "/assets/project1.png",
    site: "#",
    github: "#",
  },
  {
    title: "Journey",
    descriptionKey: "project2Desc",
    techStack: ["react", "redux", "vercel"],
    img: "/assets/project2.png",
    site: "#",
    github: "#",
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <section
      className={`${styles.section} ${darkMode ? styles.dark : ""}`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{t("projectsTitle")}</h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.projectCard} ${darkMode ? styles.projectCardDark : ""}`}
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
          >
            <img src={project.img} alt={project.title} className={styles.image} />
            <div className={styles.textContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{t(project.descriptionKey)}</p>
              <div className={styles.techStack}>
                {project.techStack.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a href={project.site}>{t("viewSite")}</a>
                <a href={project.github}>Github</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
