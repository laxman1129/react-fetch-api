import React, { useState, useEffect } from "react";
import "./App.css";
import NewsFeed from "./model/NewsFeed";
import NewsFeedScreen from "./components/NewsFeedScreen";
import data from "./util/dummy.json";

const App = () => {
  const token = `ddafbb27f60db1e692bac45c5d7bbbb0`;


  
  const res = {
    timestamp: -1,
    articleCount: 2,
    articles: [
      /* FOR TESTING AS THIS API ONLY ALLOWS 100 REQUESTS PER DAY */
    //   {
    //     title:
    //       "Charles: British Red Cross is shining example of compassion in action",
    //     description:
    //       "The Prince of Wales has praised the charity for its response since the start of the coronavirus crisis in a video message.",
    //     url:
    //       "https://www.kentonline.co.uk/news/national/charles-british-red-cross-is-shining-example-of-compassion-in-action-6100/",
    //     image: "https://images.gnews.io/0f6d2626b32ed3c2f3b7b3de3c9fbd14",
    //     publishedAt: "2020-06-20 10:49:00 UTC",
    //     source: {
    //       name: "Kent Online",
    //       url: "https://www.kentonline.co.uk",
    //     },
    //   },
    //   {
    //     title:
    //       "Getting to know the many candidates for next head coach of the Knicks",
    //     description:
    //       "This is promising news, because the last few times the Knicks had a vacancy at head coach, they didn\u2019t exactly run completely thorough search processes. Take, for example, the time Phil Jackson hired ...",
    //     url:
    //       "https://www.postingandtoasting.com/2020/6/20/21294931/getting-to-know-the-many-candidates-for-next-head-coach-of-the-knicks",
    //     image: "https://images.gnews.io/c99ce191a9c7ffbf17d45502136be122",
    //     publishedAt: "2020-06-20 10:01:00 UTC",
    //     source: {
    //       name: "Posting and Toasting",
    //       url: "https://www.postingandtoasting.com",
    //     },
    //   },
    ],
  };

  const [query, setQuery] = useState<string>("example");
  const [feed, setFeed] = useState<NewsFeed>(res);

  useEffect(() => {
    //expression language for react inside `literal ${xyz}`
    fetch(`https://gnews.io/api/v3/search?q=${query}&token=${token}`)
      .then((res) => res.json())
      .then((res) => setFeed(res))
      .catch((err) => {
        setFeed(res);
      });
  }, []);

  return (
    <div className="container">
      <NewsFeedScreen feed={feed} />
    </div>
  );
};

export default App;
