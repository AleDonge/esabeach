import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ESABEACH — Mediterranean Beach Culture',
  description: 'A premium Mediterranean beach club experience for sunsets, music and unforgettable summer nights.',
  openGraph: {
    title: 'ESABEACH',
    description: 'Mediterranean beach culture, elevated.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
