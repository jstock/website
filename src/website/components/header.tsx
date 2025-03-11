'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { HeaderButtonsSkeleton } from './skeletons';
import dynamic from 'next/dynamic';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

// Have to dynamically load header buttons since they check dark mode theme after client render
const HeaderButtons = dynamic(() => import('./header-buttons'), {
  ssr: false,
  loading(loadingProps) {
    return <HeaderButtonsSkeleton />;
  },
});

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    import('bootstrap/js/dist/collapse').then((Collapse) => {
      const collapseElements = document.querySelectorAll('.collapse');
      [...collapseElements].map(
        (el) => new Collapse.default(el, { toggle: false })
      );
    });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-inline-flex me-auto align-items-center">
            <Link
              className="navbar-brand ms-2 me-2"
              href="/"
              aria-current={pathname === '/'}
            >
              Jamey Stock
            </Link>
            <HeaderButtons />
          </div>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 column-gap-5">
              {links.map((link) => {
                return (
                  <li key={link.name} className="nav-item m-auto">
                    <Link
                      href={link.href}
                      className={`nav-link${
                        pathname === link.href ? ' active' : ''
                      }`}
                      aria-current={pathname === link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
