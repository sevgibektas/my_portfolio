import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skillsLeft = [
  { src: "/assets/js-logo.png", label: "JavaScript" },
  { src: "/assets/react-logo.png", label: "React" },
  { src: "/assets/redux-logo.png", label: "Redux" },
];

const skillsRight = [
  { src: "/assets/node-logo.jpg", label: "Node" },
  { src: "/assets/vs-logo.png", label: "VS Code" },
  { src: "/assets/figma-logo.jpg", label: "Figma" },
];

const Skills = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: darkMode ? "#1e1e1e" : "#fff" }}
    >
      <h2 className={styles.title} style={{ color: darkMode ? "#CBF281" : "#4731D3" }}>
        {t("skillsTitle")}
      </h2>

      <div className={styles.container}>
        {[skillsLeft, skillsRight].map((group, groupIndex) => (
          <div key={groupIndex} className={styles.column}>
            {group.map((skill, i) => (
              <motion.div
                key={i}
                className={styles.skill}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <img src={skill.src} alt={skill.label} className={styles.icon} />
                <span
                  style={{
                    color: darkMode ? "#bbb" : "#666",
                  }}
                >
                  {skill.label.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;