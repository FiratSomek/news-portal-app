"use client";

import { CategoryNames } from "@/constants/categories";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-1 text-3xl sm:text-4xl text-black"
      >
        {isOpen ? (
          <IoCloseSharp className="cursor-pointer" />
        ) : (
          <IoMdMenu className="cursor-pointer" />
        )}
      </button>
      {isOpen && (
        <div className="absolute  bg-white shadow-xl rounded-md mt-2 w-48 z-50">
          {CategoryNames.map((category, index) => (
            <Link
              href={
                category === "Home"
                  ? `/`
                  : `/categoryDetail/${category.toLocaleLowerCase()}`
              }
              key={index}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
              >
                {category}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
