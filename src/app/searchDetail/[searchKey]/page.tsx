"use client";

import React, { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../../../../config";
import { useParams } from "next/navigation";
import SearchDetailCard, {
  SearchDetailCardProps,
} from "@/components/cards/SearchDetailCard";

const SearchDetailPage = () => {
  const params = useParams();
  const searchKey = params?.searchKey as string;
  const [newsBySearchKey, setNewsBySearchKey] = useState<
    SearchDetailCardProps[]
  >([]);
  console.log(newsBySearchKey);
  useEffect(() => {
    const fetchNewsBySearchKey = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchKey}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setNewsBySearchKey(data.articles);
    };
    fetchNewsBySearchKey();
  }, []);

  return (
    <div>
      <ul className="grid-container">
        {" "}
        {newsBySearchKey ? (
          newsBySearchKey.map((item, index) => (
            <li key={index}>
              <SearchDetailCard
                author={item.author}
                description={item.description}
                publishedAt={item.publishedAt}
                title={item.title}
                url={item.url}
                urlToImage={item.urlToImage}
              />
            </li>
          ))
        ) : (
          <p>Data yok</p>
        )}
      </ul>
    </div>
  );
};

export default SearchDetailPage;
