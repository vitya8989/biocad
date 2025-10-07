import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lato = localFont({
    src: [
        {
            path: "../../public/fonts/lato/Lato-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/lato/Lato-Regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-lato",
    display: "swap",
});

export const metadata: Metadata = {
  title: "Тестовое задание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={lato.variable}>
        {children}
      </body>
    </html>
  );
}
