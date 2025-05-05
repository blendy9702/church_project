export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold">로그인</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              이메일
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border px-3 py-2"
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded-md border px-3 py-2"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
