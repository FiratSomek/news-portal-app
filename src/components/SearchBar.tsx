"use client";
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/searchDetail/${query}`);
    setQuery("");
    setIsOpen(false);
  };

  const inputStyles = useSpring({
    width: isOpen ? "8rem" : "0rem",
    opacity: isOpen ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="flex items-center font-black space-x-2 px-2 py-1 w-[80px] transition-all duration-300">
      <button
        onClick={() => {
          if (query.trim() === "") {
            setIsOpen(!isOpen);
          } else {
            handleSearch();
          }
        }}
      >
        <FaSearch className="text-lg sm:text-2xl cursor-pointer" />
      </button>

      <animated.input
        type="text"
        placeholder="Search..."
        className="outline-none bg-transparent border rounded-full p-1 sm:p-2 sm:w-[75px] md:block"
        style={inputStyles}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
