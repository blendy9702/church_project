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
  title: "Two Guys",
  description: "Two Guys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <div className="max-w-[1280px] h-full m-auto w-full bg-gradient-to-tr from-[#bee8fa] via-[#4f86da] to-[#62d4f7]">
          <Header />
          <div className="flex">
            <Sidebar />
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
