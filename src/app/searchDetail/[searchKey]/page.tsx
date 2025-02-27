"use client";

import React, { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../../../../config";
import { useParams } from "next/navigation";

const SearchDetailPage = () => {
  const params = useParams();
  const searchKey = params?.searchKey as string;
  const [newsBySearchKey, setNewsBySearchKey] = useState([]);
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

  return <div>safsaf</div>;
};

export default SearchDetailPage;
