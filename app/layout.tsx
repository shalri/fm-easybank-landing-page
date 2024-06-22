import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicsans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Easybank Landing page | FScode",
  description:
    "Solution for the Easybank Landing Pagae challenge Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicsans.className} flex min-h-screen flex-col`}>
        {children}
      </body>
    </html>
  );
}
