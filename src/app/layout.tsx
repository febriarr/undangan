import type { Metadata } from "next";
import { Allura, Google_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import AOSProvider from "@/components/aos-provider";

const allura = Allura({
  variable: "--font-allura",

  weight: ["400"],
  preload: true,
});

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${allura.variable} ${googleSans.variable} antialiased`}>
        <AOSProvider>{children}</AOSProvider>
        <Toaster />
      </body>
    </html>
  );
}
