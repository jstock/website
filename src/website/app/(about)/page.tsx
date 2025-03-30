import { ContactMe } from '@/components/contact-me';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutMe() {
  return (
    <div>
      <ContactMe />
    </div>
  );
}
