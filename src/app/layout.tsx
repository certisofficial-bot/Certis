import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Certis | Automate Security Questionnaires & RFPs with AI",
  description: "Certis uses AI to auto-fill RFPs, security reviews, and SOC2 compliance docs. Reduce review cycles from weeks to hours. Join the waitlist today.",
  keywords: [
    "security automation", 
    "RFP automation", 
    "SOC 2 compliance", 
    "AI security questionnaires", 
    "compliance automation", 
    "Certis"
  ],
  authors: [{ name: "Certis" }],
  openGraph: {
    title: "Certis | Automate Security Questionnaires & RFPs with AI",
    description: "Stop manually copying answers. Certis uses AI to auto-fill RFPs and compliance docs in minutes.",
    url: "https://whimsical-biscochitos-5edcc5.netlify.app",
    siteName: "Certis",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Certis - Automate Security Questionnaires",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certis | Automate Security Questionnaires & RFPs with AI",
    description: "Stop manually copying answers. Certis uses AI to auto-fill RFPs and compliance docs in minutes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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