import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders the hero content and navigation', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /paragliding weather/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/fly smarter with hyper-local wind/i),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sites/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /weather/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /boulder/i, hidden: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /lookout/i, hidden: true }),
    ).toBeInTheDocument();
  });
});
