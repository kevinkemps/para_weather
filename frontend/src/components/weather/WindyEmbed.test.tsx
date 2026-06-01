import { render, screen } from '@testing-library/react';

import { WindyEmbed } from './WindyEmbed';

describe('WindyEmbed', () => {
  it('renders an iframe with the provided attributes', () => {
    render(
      <WindyEmbed
        title="ECMWF surface winds"
        src="https://embed.windy.com/embed2.html?foo=bar"
        className="h-64 w-full"
      />
    );

    const iframe = screen.getByTitle('ECMWF surface winds');
    expect(iframe).toHaveAttribute('src', 'https://embed.windy.com/embed2.html?foo=bar');
    expect(iframe).toHaveAttribute('loading', 'lazy');
    expect(iframe).toHaveAttribute('frameborder', '0');
    expect(iframe).toHaveClass('h-64', 'w-full');
  });

  it('allows overriding the loading behavior', () => {
    render(
      <WindyEmbed
        title="Big picture winds"
        src="https://embed.windy.com/embed2.html?baz=qux"
        loading="eager"
      />
    );

    expect(screen.getByTitle('Big picture winds')).toHaveAttribute('loading', 'eager');
  });
});
