import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seaside Beach | Altınkum Çeşme",
  description: "Altınkum, Çeşme'de deniz, lezzet, müzik ve yaz atmosferi."
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="tr"><body>{children}</body></html>;
}
