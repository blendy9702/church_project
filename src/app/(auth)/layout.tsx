import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개혁주의 프로젝트",
  description: "개혁주의 프로젝트",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
