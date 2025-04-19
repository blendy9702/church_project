import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-[#1e1e1e] text-[28px] font-bold m-10">
        로그인 페이지
      </h1>
      <div className="flex flex-col items-center justify-center gap-5">
        <div>
          <Input type="email" placeholder="Email" />
        </div>
        <div>
          <Input type="password" placeholder="Password" />
        </div>
        <div className="flex gap-5">
          <button className="bg-[#1e1e1e] text-white px-4 py-2 border border-[#1e1e1e] rounded-[8px] cursor-pointer">
            로그인
          </button>
          <button className="bg-white text-[#1e1e1e] px-4 py-2 border border-[#1e1e1e] rounded-[8px] cursor-pointer">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
