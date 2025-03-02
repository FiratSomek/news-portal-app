import React from "react";
import SeeMoreButton from "./SeeMoreButton";
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
    <div className="homePageCardUi">
      <div>
        <img className="newsImg" src={urlToImage} alt={title} />
      </div>
      <div className="flex flex-col  gap-10 mx-5">
        <h1 className="text-lg font-bold">{author}</h1>
        <h2>{title}</h2>
        <h3 className="absolute top-10 right-4 text-black px-2 py-1 rounded">
          {formattedDate}
        </h3>
        <p>{description}</p>
        <Link href={url} target="_blank">
          <SeeMoreButton />
        </Link>
      </div>
    </div>
  );
};

export default SearchDetailCard;
