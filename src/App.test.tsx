import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { App } from './App';

describe('AsideMenu', () => {
  it('should start on the home page', async () => {
    render(<App />);

    const route = window.location.href;
    const routeOrigin = window.location.origin;

    await waitFor(() => {
      expect(route).toEqual(`${routeOrigin}/`);
    });
  });

  it('should change page', async () => {
    render(<App />);

    const metrics = await screen.findByText(/metrics/i);
    fireEvent.click(metrics);

    await waitFor(() => {
      const route = window.location.href;
      const routeOrigin = window.location.origin;
      expect(route).toEqual(`${routeOrigin}/#/metrics`);
    });
  });
});
