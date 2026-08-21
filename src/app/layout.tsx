import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Certis | Automate Security Questionnaires",
  description: "Certis uses AI to auto-fill RFPs, security reviews, and SOC2 compliance docs. Reduce review cycles from weeks to hours.",
  openGraph: {
    title: "Certis | Automate Security Questionnaires",
    description: "Reduce security review cycles from weeks to hours with AI.",
    url: "https://whimsical-biscochitos-5edcc5.netlify.app", // We can update this when you get a custom domain
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
        {children}
      </body>
    </html>
  );
}