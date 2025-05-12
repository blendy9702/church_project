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
          <div className="mb-6">
            <label className="block text-[#344054]">비밀번호</label>
            <input
              type="password"
              className="mt-1 w-full rounded-md border px-[16px] py-[12px] border-[#D0D5DD] hover:border-[#D1E9FF] focus:border-[#D1E9FF] focus:outline-none focus:ring-2 focus:ring-[#D1E9FF] placeholder:text-[#98A2B3] placeholder:text-[14px]"
              placeholder="비밀번호를 입력하세요."
            />
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="w-full rounded-md bg-[#5FB995] px-4 py-2 text-white hover:bg-[#49af86] cursor-pointer"
            >
              로그인
            </button>
            <button
              type="submit"
              className="w-full rounded-md bg-[#5FB995] px-4 py-2 text-white hover:bg-[#49af86] cursor-pointer"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
