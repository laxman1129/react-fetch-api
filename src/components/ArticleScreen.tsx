import React, { Component } from "react";
import Article from "../model/Article";
import "../styles/Article.css";
interface ArticleProps {
  data: Article;
}
const ArticleScreen = (props: ArticleProps) => {
  const { title, description, url, image, publishedAt, source } = props.data;
  return (
    <div className="article-container">
      <img src={image} className="image" />
      <h3 className="title">{title}</h3>
      <div className="meta">
        <span className="meta-item">{publishedAt}</span>
        <span className="meta-item">{source.name}</span>
        <span className="meta-item">
          <a href={source.url} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </span>
      </div>
      <div className="description">{description}</div>
      <div className="read-more">
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ArticleScreen;
