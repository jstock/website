import * as React from 'react';
import { buttonVariants } from './ui/button';

export function ContactMe() {
  return (
    <a
      href="mailto:jameystock.dev@gmail.com"
      className={buttonVariants({ variant: 'outline' })}
      title="Contact Me"
    >
      <i className="bi bi-envelope-fill" />
      Contact Me
    </a>
  );
}
