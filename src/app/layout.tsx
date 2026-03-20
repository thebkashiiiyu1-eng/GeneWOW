import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: 'GeneWOW | The Living Laboratory',
  description: 'Social Genetic Platform for the elite breeders.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} font-sans min-h-screen bg-[#F0F4F8] text-[#334155]`}>
        {children}
      </body>
    </html>
  );
}
