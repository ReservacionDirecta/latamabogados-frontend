import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const languages = [
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const activeIndex = languages.findIndex(l => l.code === i18n.language) ?? 0;

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.lang = code;
  };

  return (
    <div className="ls-pill" role="group" aria-label="Idioma">
      {/* Sliding highlight */}
      <span
        className="ls-slider"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
        aria-hidden="true"
      />
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`ls-btn ${i18n.language === lang.code ? 'ls-active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          title={lang.code === 'es' ? 'Español' : 'Português'}
          aria-pressed={i18n.language === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
