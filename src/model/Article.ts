import Source from "./Source";

export default interface Article {
    title: string;
    description: string;
    url: string;
    image: string;
    publishedAt: string;
    source: Source;
}