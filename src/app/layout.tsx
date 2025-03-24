import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-slideshow-image/dist/styles.css";
import "./style.scss";
import "./style.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "نادي شباب الرصيفة",
  description: "الموقع الخاص بنادي شباب الرصيفة (الرصيفة - الأردن)",
};

export const revalidate = 60 * 60 * 24 * 7; // seconds * minutes * hours * days

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html dir="rtl" lang="ar">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={inter.className}>
        <main>{children}</main>

        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-G67CGLCY30"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G67CGLCY30');
          `}
        </Script>
      </body>
    </html>
  );
};

export default Layout;
