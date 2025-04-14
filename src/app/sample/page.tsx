import {
  TestImg,
  TestTimer1,
  TestTimer2,
  TestTimer3,
} from "@/components/anime/animes";

const page = () => {
  return (
    <div className="grid grid-cols-4 gap-4items-center justify-center h-screen">
      <div>
        <TestImg />
      </div>
      <div>
        <span className="flex justify-center items-center text-2xl font-bold">
          카운트 테스트 하겠다.
        </span>
        <TestTimer1 />
        <TestTimer2 />
      </div>
    </div>
  );
};

export default page;
