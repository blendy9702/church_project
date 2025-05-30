import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-[200px] bg-[#5FB995]">
      <div className="w-[1200px] mx-auto">
        <div className="flex justify-between m-10">
          <Link href="https://nas.witnessch.xyz">
            <Image
              src="/images/arhives_alt.svg"
              alt="search"
              width={28}
              height={28}
            />
          </Link>
          <Link href="https://witnessch.xyz/">
            <Image
              src="/images/logo2.svg"
              alt="search"
              width={160}
              height={32}
            />
          </Link>
        </div>
        <div className="flex justify-between m-10">
          <Link href="/login">
            <span className="text-[#1e1e1e] text-lg font-bold">
              로그인 하기
            </span>
          </Link>
          <Link href="/test">
            <span className="text-[#1e1e1e] text-lg font-bold">
              테스트 하기
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
