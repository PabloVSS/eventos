import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"


const font = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "The event happen here",
  description: "FullStack Application: Event Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
