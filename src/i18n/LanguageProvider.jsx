// src/i18n/LanguageProvider.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider(props) {
  const { children } = props;

  const [locale, setLocale] = useState(() => {
    try {
      return localStorage.getItem('locale') || 'es';
    } catch {
      return 'es';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('locale', locale);
    } catch {
      // ignore write errors (e.g., storage disabled)
    }
  }, [locale]);

  const t = (key) => {
    return translations[locale]?.[key] ?? translations['es']?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node,
};

export function useLanguage() {
  return useContext(LanguageContext);
}
