import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";

interface SlideCardProps {
  id: string;
}

export default function SlideCard({ id }: SlideCardProps) {
  return (
    <div className="h-[400px] w-[230px] border-1 border-[#E4E4E4] rounded-[20px]">
      <div className="m-3">
        <div className="flex flex-col justify-center items-center gap-5 mb-7">
          <Image
            src="/images/test_image.png"
            alt="test_image"
            width={200}
            height={200}
            className="rounded-[14px]"
          />
        </div>
        <div className="flex flex-col gap-3 m-3">
          <div className="flex ">
            <span className="text-[20px] font-[700]">세상의 시작과 약속</span>
          </div>
          <div className="flex ">
            <span> 태초의 역사, 인간의 타락, 죄의 확산...</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end m-6 cursor-pointer">
        <Link href={`/detail/${id}`}>
          <div className="flex items-center">
            <span className="text-[12px] font-[700] text-[#49AF86]">
              자세히
            </span>
            <MdOutlineArrowForwardIos className="text-[#49AF86] text-[16px]" />
          </div>
        </Link>
      </div>
    </div>
  );
}
