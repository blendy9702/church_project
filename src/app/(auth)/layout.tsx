import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인 하기",
  description: "로그인 페이지",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="auth-layout">{children}</div>;
}
