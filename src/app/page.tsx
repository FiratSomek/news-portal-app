"use client";

import NewsCard from "@/components/NewsCard";
import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../../config";

interface NewsItem {
  author: string;
  description: string;
  title: string;
  urlToImage: string;
  url: string;
}

export default function Home() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  console.log(newsData);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${API_URL}?sources=bbc-news&apiKey=${API_KEY}`
      );
      const data = await response.json();
      console.log(data); // Yanıtı görmek için ekleyin
      setNewsData(data.articles || []); // Eğer 'data' yoksa boş bir dizi kullan
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {newsData && Array.isArray(newsData) ? (
          newsData.map((item, index) => (
            <li key={index}>
              <NewsCard
                author={item.author}
                description={item.description}
                title={item.title}
                urlToImage={item.urlToImage}
                url={item.url}
              />
            </li>
          ))
        ) : (
          <p>Haberler yükleniyor veya veri yok...</p>
        )}
      </ul>
    </div>
  );
}
