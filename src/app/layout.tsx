import './globals.css';

import Header from '@/components/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-background">
        <Header />
        {children}
      </body>
    </html>
  );
}
