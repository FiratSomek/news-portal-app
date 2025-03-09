"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SearchBar from "./SearchBar";
import DropDownMenu from "./buttons/DropDownMenuButton";
import SignInButton from "./buttons/SignInButton";
import SignUpButton from "./buttons/SignUpButton";
import { IoPersonCircle } from "react-icons/io5";

export const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <DropDownMenu />
          <SearchBar />
        </div>

        <Link href="/">
          <div className="flex text-xl font-bold cursor-pointer">
            {["N", "E", "W", "S"].map((letter, index) => (
              <span
                key={index}
                className="bg-black text-white p-2 m-1 rounded-lg"
              >
                {letter}
              </span>
            ))}
          </div>
        </Link>

        {/* <div className="flex space-x-4">
          <SignUpButton />
          <SignInButton />
        </div> */}
        {/* Sağ tarafta butonlar */}
        <div className="relative flex items-center">
          <div className="hidden md:flex space-x-4">
            <SignUpButton />
            <SignInButton />
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
              <IoPersonCircle className="text-4xl cursor-pointer" />
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 z-50">
                <ul className="flex flex-col items-center p-2 space-y-2 ">
                  <SignUpButton />
                  <SignInButton />
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <Navbar />
    </header>
  );
};
