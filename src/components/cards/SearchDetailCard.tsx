import React from "react";
import SeeMoreButton from "../buttons/SeeMoreButton";
import Link from "next/link";

export interface SearchDetailCardProps {
  author: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}

const SearchDetailCard: React.FC<SearchDetailCardProps> = ({
  author,
  description,
  publishedAt,
  title,
  url,
  urlToImage,
}) => {
  const apiDate = publishedAt;
  const formattedDate = apiDate.replace("T", " ").replace("Z", "");
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full min-h-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <img
        src={urlToImage}
        alt={title}
        className="w-full h-48 object-cover sm:h-56 md:h-64"
      />
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-gray-700 text-sm sm:text-base font-semibold">
          {author || "Unknown Author"}
        </h1>
        <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
        <h3 className="text-gray-500 text-xs sm:text-sm">{formattedDate}</h3>
        <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
          {description}
        </p>
        <Link href={url} target="_blank">
          <SeeMoreButton />
        </Link>
      </div>
    </div>
  );
};

export default SearchDetailCard;
