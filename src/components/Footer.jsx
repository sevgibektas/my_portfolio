import React from "react";
import { FaTwitter, FaInstagram, FaAt, FaCodepen } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <footer className={`${styles.footer} ${darkMode ? styles.dark : ""}`}>
      <div className={`${styles.container} ${darkMode ? styles.darkContainer : ""}`}>
        <h2 className={styles.title}>{t("footerTitle")}</h2>
        <p className={`${styles.description} ${darkMode ? styles.darkText : ""}`}>
          {t("footerSubtitle")}
        </p>
        <a
          href="mailto:bektassevgi5@gmail.com"
          className={`${styles.email} ${darkMode ? styles.darkText : ""}`}
        >
          bektassevgi5@gmail.com
        </a>
        <div className={`${styles.icons} ${darkMode ? styles.darkIcons : ""}`}>
          <FaTwitter />
          <FaCodepen />
          <FaAt />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
