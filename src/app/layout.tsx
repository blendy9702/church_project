import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Two Lee",
  description: "Two Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <div className="max-w-[1280px] m-auto w-full">
          <Header />
          <div className="flex">
            <Sidebar />
            <div className="flex-1">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
