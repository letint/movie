import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Justpoint interview - Movie app",
  description: "Create movie app that allows to show details about movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
