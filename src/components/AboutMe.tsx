import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './AboutMe.css';
import ProfilePic from '../assets/Julien.bmp'; 
import Pic42 from '../assets/42_white.png'; 
import EN_CV from '../assets/EN_CV.pdf';
import FR_CV from '../assets/FR_CV.pdf';

const AboutMe: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [showAbout42, setShowAbout42] = useState(false);

  const renderAboutMe = () => {
    return (
      <div className="about-me" id="about">
        <div className="about-me-left">
          <div className="about-me-left-container">
            <div className="about-me-left-container-text">
              <p className="light-text">{t('aboutPresentation')}</p>
              <p className="important-text">{t('aboutTitle')}</p>
              <p className="normal-text">
                {t('aboutDescBefore')}{' '}
                <span className="link" onClick={() => setShowAbout42(true)}>{t('aboutLink')}</span>
                {' '}{t('aboutDescAfter').split('\n').map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}{' '}
              </p>
              <div className="hobbies-section">
                <p className="light-text">{t('hobbiesTitle')}</p>
                <p className="normal-text">{t('hobbiesDesc')}</p>
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

  const renderAbout42 = () => {
    return (
      <div className="about-me" id="about">
        <div className="about-me-left">
          <div className="about-me-left-container">
            <div className="about-me-left-container-text">
              <p className="light-text">{t('about42Presentation')}</p>
              <p className="important-text">{t('about42Title')}</p>
              <p className="normal-text">
              {t('about42DescBefore').split('\n').map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}{' '}
                <span className="link" onClick={() => setShowAbout42(false)}>
                {t('about42Link')}
                </span>
                {' '}{t('about42DescAfter')}
              </p>
            </div>
          </div>
        </div>

        <div className="about-me-right">
          <div className="about-me-right-container">
            <div className="about-me-right-container-imgContainer">
              <img
                src={Pic42}
                alt="42School"
                className="about-42-right-container-imgContainer-image"
              />
            </div>
          </div>
        </div>
        <div className="light light-1"></div>
      </div>
    );
  };

  return showAbout42 ? renderAbout42() : renderAboutMe();
};

export default AboutMe;
