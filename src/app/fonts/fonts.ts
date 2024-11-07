import { Inter } from 'next/font/google'
import localFont from "next/font/local";

export const interLight = Inter({ subsets: ['latin'], weight: ['300']});
export const interRegular = Inter({ subsets: ['latin'], weight: ['500']});
export const interBold = Inter({ subsets: ['latin'], weight: ['900']});

export const geistSans = localFont({
  src: "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const lilita = localFont({
  src: "./lilita.ttf",
  variable: "--font-lilita",
});
