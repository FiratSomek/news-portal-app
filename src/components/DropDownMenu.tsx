"use client";

import { CategoryNames } from "@/constants/categories";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoCloseSharp className="text-4xl mx-2 cursor-pointer" />
        ) : (
          <IoMdMenu className="text-4xl mx-2 cursor-pointer" />
        )}
      </button>
      {isOpen && (
        <div className="flex flex-col absolute bg-gray-100 text-left left-20 p-5 gap-2 text-lg z-50 rounded-md font-bold">
          {CategoryNames.map((category, index) => (
            <button key={index} className="hover:bg-gray-400 rounded-md p-2">
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
