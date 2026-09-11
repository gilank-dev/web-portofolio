import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page does not exist. Head back to the portfolio home.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-4">
        404 — Page Not Found
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
        This Page Doesn&apos;t Exist
      </h1>
      <p className="text-white/60 mb-8 max-w-md">
        The link might be mistyped or the page was moved. Everything is on the home page.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
      >
        Back to Portfolio
      </Link>
    </div>
  );
}
