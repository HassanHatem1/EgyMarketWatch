import React, { useState, useEffect } from 'react';
import './newsSection.css';

const NewsSection = () => {
  const [Articles, setArticles] = useState([]);
  const defaultImageUrl = 'https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=2048x2048&w=is&k=20&c=SiCdpoQwFnlm2PxkFkfhKzVOs6-9thLv0ucoREy_OWE=';

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=eg&apiKey=6cb4b627a1c449688fee50b1c8b4cd72');
      const data = await response.json();
      setArticles(data.articles);
      console.log(data.articles);
    };
    fetchNews();
  }, []);

  return (
    <div className="news-grid">
      {Articles && Articles.map((article, index) => (
        <a href={article.url} key={index} className="news-item">
          <img src={article.urlToImage || defaultImageUrl} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.author}</p>
        </a>
      ))}
    </div>
  );
};

export default NewsSection;