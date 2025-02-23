"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../../../../config";
import CategoryCard, { CategoryCardProps } from "@/components/CategoryCard";

const CategoryDetailPage = () => {
  const params = useParams();
  const category = params?.category as string;
  const [newsByCategory, setNewsByCategory] = useState<CategoryCardProps[]>([]);

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
      <ul>
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
