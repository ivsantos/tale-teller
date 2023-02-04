import './globals.css';

import Header from '@/components/Header/Header';
import { montserrat } from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <head />
      <body className="bg-background overflow-y-scroll">
        <Header />
        {children}
      </body>
    </html>
  );
}
