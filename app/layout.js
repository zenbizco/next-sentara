import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import TrustBanner from "@/components/TrustBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sentara Labs | Manufacturing Excellence",
  description: "High-authority chemical and clinical manufacturing solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable}`}>
        <TrustBanner />
        <main>{children}</main>
      </body>
    </html>
  );
}
