import { subtractLanguage } from '../index';

export function userLanguage() {
  const browserLang = subtractLanguage({
    language: navigator.language,
    event: 'toLowerCase'
  });
  const storageLang = localStorage.getItem('lang');

  return storageLang || browserLang;
}
