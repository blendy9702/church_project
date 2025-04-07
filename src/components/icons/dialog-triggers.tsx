import { FaBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import * as Dialog from "@radix-ui/react-dialog";

export const BellIcon = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div>
          <FaBell className="text-[#1e1e1e] text-[24px] cursor-pointer" />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-[8px]">
          <Dialog.Title className="flex justify-center m-1 text-[#1e1e1e] text-[16px] font-bold">
            새로운 알림!
          </Dialog.Title>
          <Dialog.Description>
            알림이 있다면 여기에 표시
          </Dialog.Description>
          <Dialog.Close className="flex py-1 px-2 mt-5 rounded-md border-[#1e1e1e] border-1 cursor-pointer hover:bg-[#1e1e1e] hover:text-white">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const GearIcon = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div>
          <FaGear className="text-[#1e1e1e] text-[24px] cursor-pointer" />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-[8px]">
          <Dialog.Title className="flex justify-center m-1 text-[#1e1e1e] text-[16px] font-bold">
            설정
          </Dialog.Title>
          <Dialog.Description>
            설정이 있다면 여기에 표시
          </Dialog.Description>
          <Dialog.Close className="flex py-1 px-2 mt-5 rounded-md border-[#1e1e1e] border-1 cursor-pointer hover:bg-[#1e1e1e] hover:text-white">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const ProfileIcon = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div>
          <CgProfile className="text-[#1e1e1e] text-[24px] cursor-pointer" />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-[8px]">
          <Dialog.Title className="flex justify-center m-1 text-[#1e1e1e] text-[16px] font-bold">
            프로필
          </Dialog.Title>
          <Dialog.Description>
            프로필이 있다면 여기에 표시
          </Dialog.Description>
          <Dialog.Close className="flex justify-center py-1 px-2 mt-5 rounded-md border-[#1e1e1e] border-1 cursor-pointer hover:bg-[#1e1e1e] hover:text-white">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
