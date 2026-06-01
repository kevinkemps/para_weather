import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders the navigation and weather menu', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /weather/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /boulder/i, hidden: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /lookout/i, hidden: true }),
    ).toBeInTheDocument();
  });

  it('renders the boulder weather embed when routed', () => {
    window.history.pushState({}, '', '/weather/boulder');

    render(<App />);

    expect(screen.getByTitle(/ecmwf surface winds/i)).toBeInTheDocument();
  });
});
