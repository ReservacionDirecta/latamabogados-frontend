import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const languages = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language ? i18n.language.split('-')[0] : 'es';
  const activeIndex = languages.findIndex(l => l.code === currentLang);
  const finalIndex = activeIndex === -1 ? 0 : activeIndex;

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.lang = code;
  };

  return (
    <div className="ls-pill" role="group" aria-label="Idioma">
      {/* Sliding highlight */}
      <span
        className="ls-slider"
        style={{ transform: `translateX(${finalIndex * 100}%)` }}
        aria-hidden="true"
      />
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`ls-btn ${currentLang === lang.code ? 'ls-active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          title={lang.label}
          aria-pressed={currentLang === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
