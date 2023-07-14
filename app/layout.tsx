import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppContextWrapper from "./components/app-context-wrapped";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZENDIA",
  description: "mange your digital assets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextWrapper>
        {children}</AppContextWrapper> </body>
    </html>
  );
}
