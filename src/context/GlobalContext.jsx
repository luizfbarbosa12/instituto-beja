import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import i18next from "i18next";

export const GlobalContext = React.createContext("");

export const GlobalStorage = ({ children }) => {
  const [language, setLanguageState] = useState(i18next.language || 'pt');

  // Keep context in sync with i18next
  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setLanguageState(lng);
    };
    i18next.on('languageChanged', handleLanguageChanged);
    // Set initial language
    setLanguageState(i18next.language);
    return () => {
      i18next.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  // When context language is changed via setLanguage, change i18next as well
  const setLanguage = (lng) => {
    if (typeof lng !== 'string') {
      console.warn('setLanguage called with non-string:', lng);
      return;
    }
    i18next.changeLanguage(lng);
    setLanguageState(lng);
  };

  return (
    <GlobalContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalStorage.propTypes = {
  children: PropTypes.node.isRequired,
};
