import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SearchBar from "./SearchBar";
import DropDownMenu from "./buttons/DropDownMenuButton";
import SignInButton from "./buttons/SignInButton";
import SignUpButton from "./buttons/SignUpButton";

export const Header = () => {
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

        <div className="flex space-x-4">
          <SignUpButton />
          <SignInButton />
        </div>
      </div>

      <Navbar />
    </header>
  );
};
