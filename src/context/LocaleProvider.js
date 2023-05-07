import localeContext from './localeContext';
import React, { useState } from 'react';

function LocaleProvider({ children }) {

  return (
    <localeContext.Provider
      value={{
       a: 10,
      }}
    >
      {children}
    </localeContext.Provider>
  );
}

export default LocaleProvider;
