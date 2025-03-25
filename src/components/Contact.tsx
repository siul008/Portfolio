import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contact" id="contact">
      <h2>{t('contact')}</h2>
      <div className="contact-container">
        <div className="contact-column">
          <h3>{t('jobOpportunity')}</h3>
          <p>{t('jobOpportunityDesc')}</p>
        </div>
        <div className="contact-column">
          <h3>{t('developSomething')}</h3>
          <p>{t('developSomethingDesc')}</p>
        </div>
      </div>
      <div className="contact-buttons">
        <a
          href="https://github.com/siul008"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          GitHub
        </a>
        <a
          href="mailto:julien.nunespro@gmail.com"
          className="contact-button"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/juiien"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;