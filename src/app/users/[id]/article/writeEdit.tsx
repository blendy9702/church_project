"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { TextStyle } from "@tiptap/extension-text-style";
import { Extension } from "@tiptap/core";
import { FaBold } from "react-icons/fa6";
import { useState } from "react";

export function WriteEdit() {
  const [fontSize, setFontSize] = useState("16");

  const FontSize = Extension.create({
    name: "fontSize",

    addOptions() {
      return {
        types: ["textStyle"],
      };
    },

    addGlobalAttributes() {
      return [
        {
          types: this.options.types,
          attributes: {
            fontSize: {
              default: null,
              parseHTML: (element) => element.style.fontSize || null,
              renderHTML: (attributes) => {
                if (!attributes.fontSize) {
                  return {};
                }
                return {
                  style: `font-size: ${attributes.fontSize}`,
                };
              },
            },
          },
        },
      ];
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      FontSize,
      Image,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: "<p>여기에 글을 작성하세요.</p>",
    immediatelyRender: false,
  });

  const handleFontSizeChange = (size: string) => {
    setFontSize(size);
    if (editor) {
      editor
        .chain()
        .focus()
        .setMark("textStyle", { fontSize: `${size}px` })
        .run();
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="w-full max-w-[800px] mx-auto p-4 border rounded-lg border-[#D6D6D6] shadow-sm">
      <div className="flex gap-2 mb-4 items-center bg-[#2D2B2E]">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded ${
            editor.isActive("bold") ? "bg-gray-200" : ""
          }`}
        >
          <FaBold className="text-[20px] text-[#FFFFFF]" />
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
        <div className="flex items-center gap-2 ml-4">
          <label className="text-sm font-medium text-gray-700">
            폰트 크기:
          </label>
          <select
            value={fontSize}
            onChange={(e) => handleFontSizeChange(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="12">12px</option>
            <option value="14">14px</option>
            <option value="16">16px</option>
            <option value="18">18px</option>
            <option value="20">20px</option>
            <option value="22">22px</option>
            <option value="24">24px</option>
            <option value="28">28px</option>
            <option value="32">32px</option>
            <option value="36">36px</option>
            <option value="48">48px</option>
          </select>
        </div>
      </div>
      <EditorContent
        editor={editor}
        className="min-h-[600px] p-4 focus:outline-none"
      />
    </div>
  );
}
