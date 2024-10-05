import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Passportivity Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full max-w-screen-xl mx-auto font-mono antialiased h-screen">
        {children}
      </body>
    </html>
  );
}
