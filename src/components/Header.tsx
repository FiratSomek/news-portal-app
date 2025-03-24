"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SearchBar from "./SearchBar";
import DropDownMenu from "./buttons/DropDownMenuButton";
import { IoPersonCircle } from "react-icons/io5";
import LogInButton from "./buttons/LogInButton";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogOutButton from "./buttons/LogOutButton";

export const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, error, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center space-x-0 sm:space-x-2">
          <DropDownMenu />
          <SearchBar />
        </div>

        <Link href="/">
          <div className="flex text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-bold cursor-pointer">
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

        <div className="relative flex items-center">
          {user ? (
            <div className="hidden md:flex space-x-2">
              <p>Welcome, {user.name}</p>
              <Link href="/api/auth/logout">
                <LogOutButton />
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex space-x-2">
              <Link href="/api/auth/login">
                <LogInButton />
              </Link>
            </div>
          )}

          <div className="md:hidden">
            <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
              <IoPersonCircle className="text-4xl cursor-pointer" />
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 z-50">
                {user ? (
                  <ul className="flex flex-col items-center p-2 space-y-2 ">
                    <p>Welcome, {user.name}</p>

                    <Link href="/api/auth/logout">
                      <LogOutButton />
                    </Link>
                  </ul>
                ) : (
                  <ul className="flex flex-col items-center p-2 space-y-2 ">
                    <Link href="/api/auth/login">
                      <LogInButton />
                    </Link>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <Navbar />
    </header>
  );
};
