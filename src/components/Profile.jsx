import React from "react";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Profile.module.css"; 
import { useTheme } from "../context/ThemeContext";

const Profile = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <section className={`${styles.profileSection} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t("profileTitle")}</h1>

        <div className={styles.content}>
          {/* Sol: Temel Bilgiler */}
          <div className={styles.column}>
            <h2 className={styles.subtitle}>{t("basicInfo")}</h2>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.label}>{t("birthDate")}</span>
                <span>24.03.1996</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>{t("city")}</span>
                <span>Ankara</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>{t("education")}</span>
                <span>Hacettepe Üniv. Biyoloji Lisans, 2016</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>{t("role")}</span>
                <span>Frontend, UI</span>
              </div>
            </div>
          </div>

          {/* Orta: Görsel */}
          <div>
            <img
              src="/assets/profile.png"
              alt="profile"
              className={styles.profileImage}
            />
          </div>

          {/* Sağ: Hakkımda */}
          <div className={styles.column}>
            <h2 className={styles.subtitle}>{t("aboutMe")}</h2>
            <p className={styles.aboutText}>
              {t("aboutMeText")
                .split("\n")
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;