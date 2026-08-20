import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Certis | Enterprise Security Reviews, Solved in Minutes",
  description: "AI that auto-fills security questionnaires, RFPs, and SOC2 compliance docs using your existing policies.",
  keywords: ["RFP", "Security Questionnaire", "SOC2", "B2B Sales", "AI", "Compliance", "Enterprise Security"],
  authors: [{ name: "Certis", url: "https://certis.ai" }],
  openGraph: {
    title: "Certis | Enterprise Security Reviews, Solved in Minutes",
    description: "AI that auto-fills security questionnaires, RFPs, and SOC2 compliance docs using your existing policies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}