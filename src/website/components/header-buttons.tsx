'use client';

import { useTheme } from 'next-themes';

const otherLinks = [
  { icon: 'github', href: 'https://github.com/jstock', title: 'GitHub' },
  {
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/jamey-stock',
    title: 'LinkedIn',
  },
];

export default function HeaderButtons() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (
    <div className="d-inline-flex">
      {otherLinks.map((link) => {
        return (
          <button
            key={link.href}
            type="button"
            className={`btn ${
              theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'
            }`}
            title={link.title}
            onClick={() => window.open(link.href, '_blank')}
            style={{
              border: '0',
              backgroundColor: 'transparent',
              color: 'var(--bs-navbar-color)',
            }}
          >
            <i className={`bi bi-${link.icon}`} />
          </button>
        );
      })}
      <div className="vr ms-1"></div>
      <button
        type="button"
        className={`btn ${
          theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'
        }`}
        style={{
          border: '0',
          backgroundColor: 'transparent',
          color: 'var(--bs-navbar-color)',
        }}
        onClick={toggleTheme}
        title="Toggle Dark Mode"
      >
        <i className="bi bi-lightbulb-fill"></i>
      </button>
    </div>
  );
}
