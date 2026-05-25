import type { Metadata } from 'next';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";


export const metadata: Metadata = {
  title: 'ESABEACH — Mediterranean Beach Culture',
  description:
    'A premium Mediterranean beach club experience for sunsets, music and unforgettable summer nights.',
  openGraph: {
    title: 'ESABEACH',
    description: 'Mediterranean beach culture, elevated.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <CustomCursor />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}