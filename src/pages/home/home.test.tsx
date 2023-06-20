import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserLocaleProvider, I18nMessagesProvider } from '@neogrid/i18n';
import { Home } from './home';

describe('Home Page', () => {
  it('Should name page', async () => {
    render(
      <UserLocaleProvider>
        <I18nMessagesProvider
          locales={{
            en: () => import('../../i18n/en.json')
          }}
        >
          <Home />
        </I18nMessagesProvider>
      </UserLocaleProvider>
    );

    const home = await screen.findAllByText(/Home/i);

    expect(home).toBeDefined();
  });
});
