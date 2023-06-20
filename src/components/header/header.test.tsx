import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { UserLocaleProvider, I18nMessagesProvider } from '@neogrid/i18n';
import { Header } from './header';

describe('Header', () => {
  it('Should render default language in Header', async () => {
    render(
      <UserLocaleProvider>
        <I18nMessagesProvider
          locales={{
            en: () => import('../../i18n/en.json')
          }}
        >
          <Header />
        </I18nMessagesProvider>
      </UserLocaleProvider>
    );

    const langEN = await screen.findByText(/EN/i);

    expect(langEN).toBeDefined();
  });

  it('Should show all languages on Click', async () => {
    render(
      <UserLocaleProvider>
        <I18nMessagesProvider
          locales={{
            en: () => import('../../i18n/en.json')
          }}
        >
          <Header />
        </I18nMessagesProvider>
      </UserLocaleProvider>
    );

    const lanEN = await screen.findByText(/EN/);
    expect(lanEN).toBeDefined();

    fireEvent.mouseDown(lanEN);

    await waitFor(async () => {
      const langES = await screen.findByText(/ES/);
      expect(langES).toBeDefined();
    });

    await waitFor(async () => {
      const langPT = await screen.findByText(/PT/);
      expect(langPT).toBeDefined();
    });
  });

  it('Should save language in localStorage', async () => {
    render(
      <UserLocaleProvider>
        <I18nMessagesProvider
          locales={{
            en: () => import('../../i18n/en.json')
          }}
        >
          <Header />
        </I18nMessagesProvider>
      </UserLocaleProvider>
    );

    const lanEN = await screen.findByText(/EN/);
    fireEvent.mouseDown(lanEN);

    const langPT = await screen.findByText(/PT/);
    expect(langPT).toBeDefined();
    fireEvent.click(langPT);

    const langLocalStorage = localStorage.getItem('lang');
    expect(langLocalStorage).toBe('pt');
  });
});
