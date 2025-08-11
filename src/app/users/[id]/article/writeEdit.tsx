"use client";

import { Extension } from "@tiptap/core";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { BsTypeUnderline } from "react-icons/bs";
import { FaItalic } from "react-icons/fa6";
import { HiMiniBold } from "react-icons/hi2";
import { MdFormatListNumbered, MdFormatListBulleted } from "react-icons/md";

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
      Underline,
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
    <div className="w-full max-w-[1200px] mx-auto border rounded-[10px] border-[#D6D6D6] shadow-sm">
      <div className="flex gap-3 py-1 mb-4 h-[60px] items-center justify-center bg-[#2D2B2E] border rounded-t-[10px] rounded-b-none">
        <div className="flex items-center gap-2 ml-4">
          <select
            value={fontSize}
            onChange={(e) => handleFontSizeChange(e.target.value)}
            className="text-[#ffffff] px-3 py-1 text-sm focus:outline-none"
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
        <div className="bg-[#D6D6D6] w-[1px] h-[40px]"></div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1 rounded text-[#ffffff] cursor-pointer ${
            editor.isActive("bold") ? "bg-gray-200" : ""
          }`}
        >
          <HiMiniBold className="text-[18px] text-[#ffffff]" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1 rounded text-[#ffffff] cursor-pointer ${
            editor.isActive("italic") ? "bg-gray-200" : ""
          }`}
        >
          <FaItalic className="text-[15px] text-[#ffffff]" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-1 rounded text-[#ffffff] cursor-pointer ${
            editor.isActive("underline") ? "bg-gray-200" : ""
          }`}
        >
          <BsTypeUnderline className="text-[18px] text-[#ffffff]" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1 rounded text-[#ffffff] cursor-pointer ${
            editor.isActive("orderedList") ? "bg-gray-200" : ""
          }`}
        >
          <MdFormatListNumbered className="text-[20px] text-[#ffffff]" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1 rounded text-[#ffffff] cursor-pointer ${
            editor.isActive("bulletList") ? "bg-gray-200" : ""
          }`}
        >
          <MdFormatListBulleted className="text-[20px] text-[#ffffff]" />
        </button>
      </div>
      <EditorContent
        editor={editor}
        className="min-h-[600px] p-4 focus:outline-none"
      />
    </div>
  );
}
