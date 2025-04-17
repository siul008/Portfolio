import React from 'react';
import { useTranslation } from 'react-i18next';
import frFlag  from '../assets/Flag_of_France.svg';
import enFlag  from '../assets/Flag_of_the_United_Kingdom.svg';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar">
      <div className="logo">NUNES Julien</div>
      <ul className="nav-links">
        <li><a href="#about">{t('about')}</a></li>
        <li><a href="#projects">{t('projects')}</a></li>
        <li><a href="#skills">{t('skills')}</a></li>
        <li><a href="#contact">{t('contact')}</a></li>
      </ul>
      <button className="language-toggle" onClick={toggleLanguage}>
        <img
          src={i18n.language === 'en' ? frFlag : enFlag} 
          alt={i18n.language === 'en' ? 'Switch to French' : 'Switch to English'} 
          className="language-icon"
        />
      </button>
    </nav>
  );
};

export default Navbar;