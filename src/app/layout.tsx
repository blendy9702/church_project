import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
import "@/app/globals.css";
import Footer from "@/components/footer";

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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <main className="flex-1 w-full m-auto">
          <div className="bg-[#f5f5f5]">
            <Sidebar />
            <div className="flex flex-col lg:ml-[200px]">
              <Header />
              <div className="flex-1 mb-[100px] max-lg:mt-[80px]">
                {children}
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
