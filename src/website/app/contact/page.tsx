import { Metadata } from 'next';
import ContactForm from './form';

export const metadata: Metadata = {
  title: 'Contact Me',
};

export default function ContactMe() {
  return <ContactForm />;
}
