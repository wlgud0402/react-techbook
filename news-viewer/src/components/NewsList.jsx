import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'http://newsapi.org/v2/top-headlines?country=kr&apiKey=180d4aabf5484e508c8e5b2e825bc01d',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //waiting
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }

  //not yet set articles
  if (!articles) {
    return null;
  }

  //article is valie
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );

  //   return (
  //     <NewsListBlock>
  //       <NewsItem article={sampleArticle} />
  //       <NewsItem article={sampleArticle} />
  //       <NewsItem article={sampleArticle} />
  //       <NewsItem article={sampleArticle} />
  //       <NewsItem article={sampleArticle} />
  //       <NewsItem article={sampleArticle} />
  //     </NewsListBlock>
  //   );
};

export default NewsList;
