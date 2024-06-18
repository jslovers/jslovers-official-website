import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Work_Sans } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "JSLovers",
  description: "JSLovers - a community for the developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className={`${workSans.className} flex-1`}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
