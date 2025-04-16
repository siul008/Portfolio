import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutMe.css';
import ProfilePic from '../assets/Julien.bmp'; 
import EN_CV from '../assets/EN_CV.pdf';
import FR_CV from '../assets/FR_CV.pdf';

const AboutMe: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="about-me" id="about">
      <div className="about-me-left">
        <div className="about-me-left-container">
          <div className="about-me-left-container-text">
            <span className="light-text">{t('aboutPresentation')}</span>
            <span className="important-text">{t('aboutTitle')}</span>
            <span className="normal-text">{t('aboutDesc')}</span>
            <div className="hobbies-section">
              <span className="light-text">{t('hobbiesTitle')}</span>
              <span className="normal-text">{t('hobbiesDesc')}</span>
            </div>
          </div>
          <a
          
            href={i18n.language === 'en' ? EN_CV : FR_CV} 
            target="_blank"
            rel="noopener noreferrer"
            className="about-me-left-container-btn"
          >
            {t('downloadResume')}
          </a>
        </div>
      </div>

      <div className="about-me-right">
        <div className="about-me-right-container">
          <div className="about-me-right-container-imgContainer">
            <img
              src={ProfilePic}
              alt="Profile"
              className="about-me-right-container-imgContainer-image"
            />
          </div>
        </div>
      </div>
      <div className="light light-1"></div>
    </div>
  );
};

export default AboutMe;