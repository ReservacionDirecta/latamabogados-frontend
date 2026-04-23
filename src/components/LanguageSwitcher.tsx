import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  const languages = [
    { code: 'es', name: 'ES', label: 'Español' },
    { code: 'en', name: 'EN', label: 'English' },
    { code: 'pt', name: 'PT', label: 'Português' }
  ];

  return (
    <div className="language-switcher" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Globe size={16} style={{ color: 'var(--ma-accent-color)' }} />
      <div style={{ display: 'flex', gap: '4px' }}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '2px 4px',
              fontSize: '0.85rem',
              fontWeight: i18n.language === lang.code ? '700' : '400',
              color: i18n.language === lang.code ? 'var(--ma-accent-color)' : 'inherit',
              transition: 'all 0.2s ease'
            }}
            title={lang.label}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
