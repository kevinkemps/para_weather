import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders the navigation and weather menu', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByText(/weather/i, { selector: 'summary' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /boulder/i, hidden: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /lookout/i, hidden: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /steamboat/i, hidden: true }),
    ).toBeInTheDocument();
  });

  it('renders the boulder weather embed when routed', () => {
    window.history.pushState({}, '', '/weather/boulder');

    render(<App />);

    expect(screen.getByTitle(/ecmwf surface winds/i)).toBeInTheDocument();
  });

  it('renders the steamboat weather page when routed', () => {
    window.history.pushState({}, '', '/weather/steamboat');

    render(<App />);

    expect(screen.getByRole('heading', { name: /steamboat forecast/i })).toBeInTheDocument();
    expect(screen.getByTitle(/steamboat surface winds/i)).toBeInTheDocument();
  });
});
