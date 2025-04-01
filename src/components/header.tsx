import { Input } from "@/components/ui/input";
import {
  BellIcon,
  GearIcon,
  ProfileIcon,
} from "./icons/dialog-triggers";
import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <div className="flex justify-between items-center h-[80px] mx-4">
        <div className="text-[#1e1e1e] text-[32px] font-bold">
          <Link href="/">DASHBOARD</Link>
        </div>
        <div>
          <Input className="w-[300px] h-[32px]" placeholder="검색" />
        </div>
        <div className="flex gap-5">
          <BellIcon />
          <GearIcon />
          <ProfileIcon />
        </div>
      </div>
    </header>
  );
}
