import Article from "./Article";

export default interface NewsFeed {
    timestamp: number;
    articleCount: number;
    articles: Article[];
}