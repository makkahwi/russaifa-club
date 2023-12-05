import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noor Kayyal",
  description: "Unlock Your Potential",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html dir="ltr" lang="en">
      <head>
        <link rel="icon" href="/FavIcon.jpg" sizes="any" />
      </head>

      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
