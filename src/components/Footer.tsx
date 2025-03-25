import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
    <p>Copyright © 2025 - Nunes Julien. {t('copyright')}.</p>
    </footer>
  );
};

export default Contact;