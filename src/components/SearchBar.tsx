"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/searchDetail/${query}`);
    setQuery("");
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center font-black space-x-2 px-2 py-1 w-[80px] transition-all duration-300">
      <motion.button
        onClick={() => {
          if (query.trim() === "") {
            setIsOpen(!isOpen);
          } else {
            handleSearch();
          }
        }}
      >
        <FaSearch className="text-lg sm:text-2xl cursor-pointer" />
      </motion.button>
      {isOpen && (
        <motion.input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent w-[50px] transition-all border rounded-full p-1 sm:p-2 sm:w-[75px]  md:block"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "8rem", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          onChange={(e) => {
            setQuery(e.target.value.toLowerCase());
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;
