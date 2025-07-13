"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

export function WriteEdit() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: "<p>여기에 글을 작성하세요.</p>",
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="w-full max-w-[800px] mx-auto p-4 border rounded-lg shadow-sm">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded ${
            editor.isActive("bold") ? "bg-gray-200" : ""
          }`}
        >
          굵게
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded ${
            editor.isActive("italic") ? "bg-gray-200" : ""
          }`}
        >
          기울임
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded ${
            editor.isActive("bulletList") ? "bg-gray-200" : ""
          }`}
        >
          목록
        </button>
      </div>
      <EditorContent editor={editor} className="min-h-[300px] border p-4" />
    </div>
  );
}
