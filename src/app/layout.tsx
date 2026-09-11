import type { Metadata } from "next";
import { Geist, Geist_Mono, Parkinsans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://web-portofolio.vercel.app"),
  title: "Gilank — Portfolio | Crafting Digital Excellence",
  description:
    "Portfolio M Gilank Putra Ramadhan (Lankdev): selected projects in web development, from interactive tools to finance dashboards. Full-stack developer from Indonesia.",
  applicationName: "Gilank Portfolio",
  authors: [{ name: "M Gilank Putra Ramadhan" }],
  creator: "M Gilank Putra Ramadhan",
  keywords: [
    "Gilank",
    "Lankdev",
    "portfolio",
    "full-stack developer",
    "web developer Indonesia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Gilank Portfolio",
    title: "Gilank — Portfolio | Crafting Digital Excellence",
    description:
      "Selected projects in web development by M Gilank Putra Ramadhan (Lankdev).",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Gilank portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilank — Portfolio",
    description: "Selected projects in web development by Gilank (Lankdev).",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${parkinsans.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
