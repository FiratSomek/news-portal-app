"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NewsCard from "@/components/NewsCard";

interface Articles {
  author: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}
const apiUrl = "https://newsapi.org/v2/everything";
const apiKey = "83e0379495354d1cadf88393462a190a";

export default function Home() {
  const [data, setData] = useState<Articles[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`${apiUrl}?q=gold&apiKey=${apiKey}`);
      const request = await res.json();
      setData(request.articles);
    }
    fetchPosts();
  }, []);
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <NewsCard
            key={index}
            author={item.author}
            description={item.description}
            title={item.title}
            urlToImage={item.urlToImage}
            url={item.url}
          />
          // <li key={index}>
          //   {item.urlToImage ? (
          //     <img src={item.urlToImage} alt={item.title} width={200} />
          //   ) : (
          //     <div>No image available</div>
          //   )}
          //   <h3>{item.title}</h3>
          //   <p>{item.description}</p>
          //   <Link href={item.url} target="_blank">
          //     Read more
          //   </Link>
          // </li>
        ))}
      </ul>
    </div>
  );
}
