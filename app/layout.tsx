import type { Metadata } from "next";
import { Audiowide, DM_Sans, Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethink = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight:"400"
});

export const metadata: Metadata = {
  title: "Livora",
  description: "Livora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethink.variable}  ${dmSans.variable}  ${audiowide.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
function Rethink_sans(arg0: { va: any }) {
  throw new Error("Function not implemented.");
}
