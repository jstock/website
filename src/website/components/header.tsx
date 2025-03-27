'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Separator } from '@/components/ui/separator';

const socials = [
  { icon: 'bi bi-github', href: 'https://github.com/jstock', title: 'GitHub' },
  {
    icon: 'bi bi-linkedin',
    href: 'https://www.linkedin.com/in/jamey-stock',
    title: 'LinkedIn',
  },
];

const links = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Projects', href: '/projects' },
];

export default function Header() {
  return (
    <div className="border-b">
      <div className="h-16 shrink-0 flex items-center gap-2 px-4">
        <div className="mr-auto">
          <span className="inline-flex gap-4">
            <Link href="/">Jamey Stock</Link>
            <Separator orientation="vertical" />
            {socials.map((social) => {
              return (
                <div key={social.href}>
                  <Link href={social.href} title={social.title} target="_blank">
                    <i className={social.icon}></i>
                  </Link>
                </div>
              );
            })}
          </span>
        </div>
        <div className="gap-16 hidden md:inline-flex">
          {links.map((link) => {
            return (
              <div key={link.href}>
                <Link href={link.href}>{link.name}</Link>
              </div>
            );
          })}
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
      <div className="mx-4 md:hidden">
        {links.map((link) => {
          return (
            <div key={link.href} className="py-4">
              <Link href={link.href}>{link.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
