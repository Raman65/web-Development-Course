import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MorSambalpuri - Nizar bhasa nizar gourav",
  description:
    "Sambalpur, in Western Odisha, is a region that has a distinct cultural identity. The songs, clothing, dances, language, Food and festivals celebrated in Sambalpur and Western Odisha are unique. This distinct cultural identity arises from the strong association of the tribal and folk communities which have been coexisting in Sambalpur and Other Districts Of Western Odisha Region for centuries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
