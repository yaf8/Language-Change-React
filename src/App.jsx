/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleChangeLanguage('am')}>አማ</button>
        <button onClick={() => handleChangeLanguage('en')}>En</button>
      </div>
      <h1>{t('greeting')}</h1>
      <p>{t('welcome')}</p>
    </div>
  );
}

export default App;
