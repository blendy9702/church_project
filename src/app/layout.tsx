import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "개혁주의 프로젝트",
  description: "개혁주의 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`antialiased flex flex-col min-h-screen`}>
        <header className="fixed top-0 left-0 right-0 z-10">
          <Header />
        </header>
        <div className="max-w-[1440px] m-auto mt-[56px] flex-grow">
          <div className="w-[1200px] mx-auto">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
