import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/global.scss';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | jameystock.dev',
    default: 'jameystock.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider defaultTheme="dark" attribute="data-bs-theme">
          <Header />
          <div className="container-fluid mt-4">
            <div className="row">
              <div className="col-md-2 col-xs-hidden"></div>
              <div className="col">{children}</div>
              <div className="col-md-2 col-xs-hidden"></div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
