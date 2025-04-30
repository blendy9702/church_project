import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white text-gray-800">
      <div className="mb-8">
        <svg
          className="w-24 h-24 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 15s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      </div>
      <h1 className="text-5xl font-light mb-4">404</h1>
      <h2 className="text-2xl font-light mb-2">페이지를 찾을 수 없습니다</h2>
      <p className="text-gray-600 mb-8">
        요청하신 페이지가 삭제되었거나 잘못된 경로입니다.
      </p>
      <Link
        href="/"
        className="text-[#49AF86] hover:text-[#49AF86] font-semibold transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
