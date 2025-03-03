import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SearchBar from "./SearchBar";
import DropDownMenu from "./DropDownMenu";

export const Header = () => {
  return (
    <div className="header">
      <div className="  flex items-center justify-between p-2">
        <div className="flex mx-5 items-center ">
          <DropDownMenu />
          <SearchBar />
        </div>{" "}
        <Link href={"/"}>
          <div className="flex text-lg text-white cursor-pointer ">
            <div className="font-bold  bg-black p-2 m-1">N</div>
            <div className="font-bold bg-black p-2 m-1">E</div>
            <div className="font-bold bg-black p-2 m-1">W</div>
            <div className="font-bold bg-black p-2 m-1">S</div>
          </div>{" "}
        </Link>
        <div className="flex mx-5">
          <button className=" bg-black text-white w-20 h-10 p-2 font-bold mx-2">
            Register
          </button>
          <button className=" font-bold  mx-2">Sign In</button>
        </div>
      </div>
      {""}
      <div>
        <Navbar />
      </div>
    </div>
  );
};
