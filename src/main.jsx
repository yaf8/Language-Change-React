/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your language files
import enTranslation from './locales/en.json';
import amTranslation from './locales/am.json';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      am: {
        translation: amTranslation,
      },
    },
    lng: 'am', // Default language
    fallbackLng: 'am', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
)
