import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Certis | Automate Security Questionnaires",
  description: "Certis uses AI to auto-fill RFPs, security reviews, and SOC2 compliance docs. Reduce review cycles from weeks to hours.",
  openGraph: {
    title: "Certis | Automate Security Questionnaires",
    description: "Reduce security review cycles from weeks to hours with AI.",
    url: "https://whimsical-biscochitos-5edcc5.netlify.app",
    siteName: "Certis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certis | Automate Security Questionnaires",
    description: "Reduce security review cycles from weeks to hours with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0A0A0C] text-zinc-100">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-K8H0Q47Y5B`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K8H0Q47Y5B');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}