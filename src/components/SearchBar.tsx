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
    <div className="flex items-center font-black space-x-2 px-2 py-1 w-[200px] transition-all duration-300">
      <motion.button
        onClick={() => {
          if (query.trim() === "") {
            setIsOpen(!isOpen);
          } else {
            handleSearch();
          }
        }}
      >
        <FaSearch className="w-6 h-6 text-black-600 cursor-pointer" />
      </motion.button>
      {isOpen && (
        <motion.input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent text-gray-700 w-full transition-all border rounded-full p-2 "
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "12rem", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(); // search with Enter
            }
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;
