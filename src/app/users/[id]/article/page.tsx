import { Edit1, Edit2 } from "@/components/edit/edit";

export default function ArticlePage() {
  return (
    <div className="w-full max-w-[1200px]">
      <div className="flex flex-col justify-center py-3">
        <Edit1 />
        <Edit2 />
      </div>
    </div>
  );
}
