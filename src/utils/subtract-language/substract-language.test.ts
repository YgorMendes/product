import { subtractLanguage } from './subtract-language';

describe('Utils subtractLanguage', () => {
  test('Should return EN from string "en-US"', () => {
    expect(subtractLanguage({ language: 'en-US', event: 'toUpperCase' })).toBe(
      'EN'
    );
  });
  test('Should return en from string "en-US"', () => {
    expect(subtractLanguage({ language: 'en-US', event: 'toLowerCase' })).toBe(
      'en'
    );
  });
});
