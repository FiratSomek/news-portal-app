import { CategoryNames } from "@/constants/categories";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-5 border-b-4 border-t-4 ">
      <ul className="flex item-center justify-evenly ">
        {CategoryNames.map((item, index) => (
          <li key={index} className="categoriesUi">
            <Link
              href={
                item === "Home"
                  ? `/`
                  : `/categoryDetail/${item.toLocaleLowerCase()}`
              }
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
