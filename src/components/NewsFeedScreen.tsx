import React, { Component, useState } from "react";
import "./NewsFeed.css"

import NewsFeed from "../model/NewsFeed";
import ArticleScreen from "./ArticleScreen";



interface NewsFeedProps {
  feed: NewsFeed;
}

const NewsFeedScreen = (props: NewsFeedProps) => {
  const { feed } = props;

  const newsFeed = feed ? (
    feed.articles.map((article) => (
      <div key={article.url}>
        <ArticleScreen data={article} />
      </div>
    ))
  ) : (
    <div>No Data Found</div>
  );

  return <div className="feed-container">{newsFeed}</div>;
};

export default NewsFeedScreen;
