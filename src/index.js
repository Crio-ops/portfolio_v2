import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './assets/localization/en.json';
import translationFR from './assets/localization/fr.json';

// Initialisation de i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      fr: {
        translation: translationFR
      }
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'fr', // Langue de secours
    interpolation: {
      escapeValue: false // Ne pas échapper les caractères spéciaux
    }
  });

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();