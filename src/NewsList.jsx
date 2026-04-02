import NewsItems from "./components/NewsItems";

export default function NewsList({ news }) {
    return (
        {news.map((item) => (
            <NewsItems key={item.id} item={item} />
        ))}
    )
}