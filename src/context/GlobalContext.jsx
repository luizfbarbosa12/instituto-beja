import React, { useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = React.createContext("");

export const GlobalStorage = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  console.log(language);

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
