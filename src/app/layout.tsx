import './globals.css';

// import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-background overflow-y-scroll">
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
