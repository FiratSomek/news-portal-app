import Link from "next/link";
import React from "react";
import SeeMoreButton from "./SeeMoreButton";

export interface CategoryCardProps {
  name: string;
  description: string;
  url: string;
  country: string;
}
const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  description,
  url,
  country,
}) => {
  return (
    <div className="categoryCardUi">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p>{description}</p>
      <Link target="_blank" href={url}>
        <SeeMoreButton />
      </Link>
      <img
        src={`https://flagcdn.com/32x24/${country}.png`}
        alt={country}
        className="shadow-lg"
      />
      <br />
    </div>
  );
};

export default CategoryCard;
