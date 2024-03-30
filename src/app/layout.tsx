import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Welcome to Apollo Gears",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="text-5xl text-center text-blue-500 font-bold">This is fokira Navbar</h1>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
