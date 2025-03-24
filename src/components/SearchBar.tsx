"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim() !== "") {
      router.push(`/searchDetail/${query}`);
    }
  };

  return (
    <div className="flex items-center font-black space-x-2 px-2 py-1 w-[120px] transition-all duration-300">
      {" "}
      <input
        type="text"
        placeholder="Search..."
        className="outline-none bg-transparent border rounded-full p-1 sm:p-2 sm:w-[110px] md:block"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        onClick={() => {
          handleSearch();
        }}
      >
        <FaSearch className="text-lg sm:text-2xl cursor-pointer" />
      </button>
    </div>
  );
};

export default SearchBar;
