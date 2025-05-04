import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";


const Hero = () => {
  const { t, toggleLanguage } = useLanguage();
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <section className={styles.hero}>
      <div className={styles.topBar}>
        <h2 className={styles.name}>Sevgi</h2>
        <div className={styles.controls}>
          <button onClick={toggleLanguage} className={styles.toggleButton}>
            {t("toggleLang")}
          </button>
          <button onClick={toggleTheme} className={styles.toggleButton}>
            {t("toggleTheme")}
          </button>
        </div>
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className={styles.title}>{t("heroTitle")}</h1>
          <p className={styles.subtitle}>{t("heroSubtitle")}</p>
          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          >
            <button className={styles.btn}>{t("github")}</button>
            <button className={styles.btn}>{t("linkedin")}</button>
          </motion.div>
        </motion.div>

        <motion.img
          src="/assets/hero.png"
          alt="Hero"
          className={styles.image}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;

