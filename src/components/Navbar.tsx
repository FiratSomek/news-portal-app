"use client";
import { usePathname } from "next/navigation";
import { CategoryNames } from "@/constants/categories";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md fixed w-full ">
      <ul className="flex  justify-center space-x-6 p-4 ">
        {CategoryNames.map((item, index) => {
          const isActive =
            (item === "Home" && pathname === "/") ||
            pathname.includes(`/categoryDetail/${item.toLowerCase()}`);

          return (
            <li key={index}>
              <Link
                href={
                  item === "Home"
                    ? `/`
                    : `/categoryDetail/${item.toLowerCase()}`
                }
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-black font-bold hover:bg-gray-100"
                }`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
