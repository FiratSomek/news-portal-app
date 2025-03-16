import Link from "next/link";
import React from "react";
import SeeMoreButton from "../buttons/SeeMoreButton";

export interface CategoryDetailCardProps {
  name: string;
  description: string;
  url: string;
  country: string;
}

const CategoryCard: React.FC<CategoryDetailCardProps> = ({
  name,
  description,
  url,
  country,
}) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full min-h-full
 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-lg sm:text-xl font-bold">{name}</h1>
        <img
          src={`https://flagcdn.com/32x24/${country}.png`}
          alt={country}
          className="w-10 h-8 shadow-lg"
        />
      </div>
      <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
        {description}
      </p>
      <Link target="_blank" href={url}>
        <SeeMoreButton />
      </Link>
    </div>
  );
};

export default CategoryCard;
