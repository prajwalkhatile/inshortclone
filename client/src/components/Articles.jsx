import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router";

import { getNews } from "../services/api.js";

import Article from "./Article.jsx";

const Articles = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let response = await getNews(page);
        setNews([...news, ...response.data]);
        console.log(response);
      } catch (error) {
        console.log(error);
        history.push("/login");
      }
    };

    fetchNews();
  }, [page]);

  //   return news.map((article) => <Article article={article} />);
  return (
    <InfiniteScroll
      dataLength={news.length}
      next={() => setPage((page) => page + 1)}
      hasMore={true}
    >
      {news.map((article) => (
        <Article article={article} />
      ))}
    </InfiniteScroll>
  );
};

export default Articles;
