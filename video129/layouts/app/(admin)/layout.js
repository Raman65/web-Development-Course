import localFont from "next/font/local";

import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer"

export const metadata = {
  title: "Admin: MorSambalpuri - Nizar bhasa nizar gourav",
  description:
    "Admin page: Sambalpur, in Western Odisha, is a region that has a distinct cultural identity. The songs, clothing, dances, language, Food and festivals celebrated in Sambalpur and Western Odisha are unique. This distinct cultural identity arises from the strong association of the tribal and folk communities which have been coexisting in Sambalpur and Other Districts Of Western Odisha Region for centuries.",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span>Admin Navbar</span>
    {children}
    </>
    
  );
}
