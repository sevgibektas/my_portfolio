import { createContext, useContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  const t = (key) =>
    ({
      en: {
        heroTitle: "I am a Frontend Developer...",
        heroSubtitle: "...who likes to craft solid and scalable frontend products with great user experiences.",
        toggleLang: "Türkçe",
        toggleTheme: "Dark Mode",
        skillsTitle: "Skills",
        profileTitle: "Profile",
        basicInfo: "Basic Information",
        birthDate: "Birth Date",
        city: "City of Residence",
        education: "Education",
        role: "Preferred Role",
        aboutMe: "About Me",
        aboutMeText:
          "I love combining coding and design to create aesthetic and functional web experiences. I focus on user-centered deployments.\n\nI am a software developer who is constantly improving himself in the field of frontend development. I like to create projects with HTML, CSS, JavaScript and React.",
        projectsTitle: "Projeler",
        viewSite: "Siteyi Görüntüle",
        project1Desc: "Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu ve bir NPM paketi olarak mevcuttur ve git deposu kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
        project2Desc: "Kullanıcı onayı ve hızlı kurulum seçenekleriyle başka bir çerez eklentisi.",
        footerTitle: "Bana mesaj gönder!",
        footerSubtitle: "Bir sorun mu var, teklif mi sunmak istiyorsun, yoksa sadece merhaba mı demek istiyorsun? Hadi yaz!",

          
        },
      tr: {
        heroTitle: "Ben bir Frontend Developer'ım...",
        heroSubtitle: "...harika kullanıcı deneyimleri sunan, sağlam ve ölçeklenebilir ön uç ürünleri tasarlamayı seven.",
        toggleLang: "English",
        toggleTheme: "Koyu Modu Değiştir",
        skillsTitle: "Yeteneklerim",
        profileTitle: "Profil",
        basicInfo: "Temel Bilgiler",
        birthDate: "Doğum Tarihi",
        city: "İkamet Şehri",
        education: "Eğitim Durumu",
        role: "Tercih Ettiği Rol",
        aboutMe: "Hakkımda",
        aboutMeText:
      "Kodlama ve tasarımı birleştirerek estetik ve işlevsel web deneyimleri oluşturmayı seviyorum. Kullanıcı odaklı projelere odaklanıyorum.\n\nFrontend geliştirme alanında kendini sürekli geliştiren bir yazılım geliştiricisiyim. HTML, CSS, JavaScript ve React ile projeler oluşturmayı seviyorum.",
      projectsTitle: "Projects",
      viewSite: "View Site",
      project1Desc: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      project2Desc: "Another customizable cookie plugin with user consent options and fast setup.",
      footerTitle: "Send me a message!",
      footerSubtitle: "Got a question or proposal, or just want to say hello? Go ahead.",  
    },
    }[language][key] || key);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
