import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function SlideCard({
  id,
  title,
  description,
  image,
}: CardProps) {
  return (
    <div className="h-[400px] w-[230px] border-1 border-[#E4E4E4] rounded-[20px]">
      <div className="m-3">
        <div className="flex flex-col justify-center items-center gap-5 mb-7">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="rounded-[14px] object-cover !h-[200px] !w-[200px]"
          />
        </div>
        <div className="flex flex-col gap-3 m-3">
          <div className="flex ">
            <span className="text-[20px] font-[700]">{title}</span>
          </div>
          <div className="flex ">
            <span>{description}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end m-6 cursor-pointer">
        <Link href={`/detail`}>
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
