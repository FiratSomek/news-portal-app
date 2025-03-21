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

  useEffect(() => {
    const fetchNewsByCategory = async () => {
      const response = await fetch(
        `${API_URL}/sources?category=${category}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setNewsByCategory(data.sources);
    };

    fetchNewsByCategory();
  }, [category]);

  return (
    <div>
      <ul className="grid-container">
        {newsByCategory && Array.isArray(newsByCategory) ? (
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
          <p>Haberler yükleniyor veya veri yok...</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryDetailPage;
