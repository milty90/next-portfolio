import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milan's Portfolio",
  description: "Portfolio von Milan",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      style={{ scrollBehavior: "smooth" }}
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
