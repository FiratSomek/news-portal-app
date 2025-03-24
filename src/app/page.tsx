"use client";

import HomePageCard, { NewsCardProps } from "@/components/cards/HomePageCard";
import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../../config";

export default function Home() {
  const [newsData, setNewsData] = useState<NewsCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Uygulamayı localhost ta ilk çalıştırdıgımda home page de api'den herhangi bir veri alamamıyorum ama sayfa görüntüleniyor ve category butonları vs basıp verileri çekebiliyorum ama vercel deploy ettiğimde ilk çalıştırdıgımda veriler gelmediği için hata alıyorum ve sayfagörüntülenemiyor. Nerede hata yaptıgımı da merak ediyorum bir türlü bulamadım

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${API_URL}?sources=bbc-news&apiKey=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setNewsData(data.articles || []);
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-16 min-h-screen">
      {loading && <p>Loading news...</p>}

      {error && <p>An error occured while receiving data: {error}</p>}

      <ul className="grid-container">
        {newsData.length > 0
          ? newsData.map((item, index) => (
              <li key={index}>
                <HomePageCard
                  author={item.author}
                  description={item.description}
                  title={item.title}
                  urlToImage={item.urlToImage}
                  url={item.url}
                />
              </li>
            ))
          : !loading && !error && <p>No news was found.</p>}
      </ul>
    </div>
  );
}
