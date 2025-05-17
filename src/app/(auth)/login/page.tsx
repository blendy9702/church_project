import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold">로그인</h1>
        <form>
          <div className="mb-4">
            <label className="block text-[#344054]">이메일</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border px-[16px] py-[12px] border-[#D0D5DD] hover:border-[#D1E9FF] focus:border-[#D1E9FF] focus:outline-none focus:ring-2 focus:ring-[#D1E9FF] placeholder:text-[#98A2B3] placeholder:text-[14px]"
              placeholder="email@email.com"
            />
          </div>
          <div className="mb-8">
            <div className="flex justify-between">
              <label className="block text-[#344054]">비밀번호</label>
              <Link href="/login" className="text-[#5FB995]">
                비밀번호 찾기
              </Link>
            </div>
            <input
              type="password"
              className="mt-1 w-full rounded-md border px-[16px] py-[12px] border-[#D0D5DD] hover:border-[#D1E9FF] focus:border-[#D1E9FF] focus:outline-none focus:ring-2 focus:ring-[#D1E9FF] placeholder:text-[#98A2B3] placeholder:text-[14px]"
              placeholder="비밀번호를 입력하세요."
            />
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full rounded-md bg-[#5FB995] px-4 py-2 hover:bg-[#49af86] cursor-pointer"
            >
              <span className="text-white font-[700]">로그인</span>
            </button>
            <button
              type="submit"
              className="flex justify-center items-center w-full rounded-md bg-[#D1FFE9] px-4 py-2 hover:bg-[#96ebc9] cursor-pointer"
            >
              <div className="flex gap-2">
                <Image src="/google.svg" alt="구글" width={20} height={20} />
                <span className="text-[#5FB995] font-[700]">
                  구글 계정으로 가입하기
                </span>
              </div>
            </button>
            <div className="flex justify-center items-center gap-2">
              <span className="text-[#98A2B3]">계정이 없으신가요?</span>
              <Link href="/login" className="text-[#5FB995]">
                가입하기
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
