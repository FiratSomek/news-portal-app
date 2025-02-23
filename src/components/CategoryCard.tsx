import Link from "next/link";
import React from "react";

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
    <div>
      <h1 className="text-lg font-bold">{name}</h1>
      <p>{description}</p>
      <Link target="_blank" href={url}>
        see more
      </Link>
      <h3>{country}</h3>
      <br />
    </div>
  );
};

export default CategoryCard;
