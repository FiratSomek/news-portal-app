import React from "react";
import Link from "next/link";
import "../../styles/globals.css";
import SeeMoreButton from "./SeeMoreButton";

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
    <div className="homePageCardUi">
      <div>
        <img className="newsImg" src={urlToImage} alt={title} />
      </div>
      <div className="flex flex-col  gap-10 mx-5">
        <h1 className="text-lg font-bold">{author}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={url} target="_blank">
          <SeeMoreButton />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
