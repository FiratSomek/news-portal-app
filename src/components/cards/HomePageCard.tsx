import React from "react";
import Link from "next/link";
import SeeMoreButton from "../buttons/SeeMoreButton";

export interface NewsCardProps {
  author: string;
  description: string;
  title: string;
  urlToImage: string;
  url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  author,
  description,
  title,
  urlToImage,
  url,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full max-w-sm min-h-full min-h-md sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div className="w-full">
        <img
          src={urlToImage}
          alt={title}
          className="w-full h-48 object-cover sm:h-56 md:h-64"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-gray-700 text-sm sm:text-base font-semibold">
          {author || "Unknown Author"}
        </h1>
        <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
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

export default NewsCard;
