import { useEffect } from 'react';
import { useState } from 'react';
import NewsItem from '../NewsItem';
import './NewsBoard.css';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey= ${import.meta.env.VITE_API_KEY}`;

    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2bed012abdf646478119fe5bd20f3945`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        console.log(data.articles);
      });
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="news-cards">
        {articles.map((news) => {
          return (
            <div className="news-cards-details">
              <NewsItem
                key={news.source.id}
                title={news.title}
                description={news.description}
                url={news.url}
                src={news.urlToImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsBoard;
