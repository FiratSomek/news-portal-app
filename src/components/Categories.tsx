import Link from "next/link";
import React from "react";

const Categories = () => {
  const CategoryNames = [
    "Home",
    "Sports",
    "Business",
    "Innovation",
    "Culture",
    "Arts",
    "Travel",
    "Earth",
    "Video",
  ];
  return (
    <div className="p-5 border-b-4 border-t-4 ">
      <ul className="flex item-center justify-evenly ">
        {CategoryNames.map((item, index) => (
          <li key={index} className="categoriesUi">
            <Link
              href={item === "Home" ? `/` : `/categories/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
