import { userLanguage } from './user-language';

describe('Utils userLanguage', () => {
  test('Should return browser language', () => {
    expect(userLanguage()).toBe('en');
  });
  test('Should return localStorage language', () => {
    localStorage.setItem('lang', 'pt');
    expect(userLanguage()).toBe('pt');
  });
});
