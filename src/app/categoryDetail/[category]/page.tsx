"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../../../../config";
import CategoryCard, {
  CategoryDetailCardProps,
} from "@/components/cards/CategoryDetailCard";

const CategoryDetailPage = () => {
  const params = useParams();
  const category = params?.category as string;
  const [newsByCategory, setNewsByCategory] = useState<
    CategoryDetailCardProps[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return;
    const fetchNewsByCategory = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_URL}/sources?category=${category}&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setNewsByCategory(data.sources || []);
      } catch (error) {
        console.error("Data extraction error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsByCategory();
  }, [category]);
  if (loading) {
    return <p>Loading News...</p>;
  }

  return (
    <div>
      <ul className="grid-container">
        {newsByCategory.length > 0 ? (
          newsByCategory.map((item, index) => (
            <li key={index}>
              <CategoryCard
                name={item.name}
                description={item.description}
                url={item.url}
                country={item.country}
              />
            </li>
          ))
        ) : (
          <p>No news was found for this category</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryDetailPage;
