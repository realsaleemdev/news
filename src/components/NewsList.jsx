export default function NewsList({ news }) {
  return (
    <>
      {news.map((item) => (
        <div key={item.id} className="news_item"> 
          <h3>{item.title}</h3>
          <div>{item.feed}</div>
        </div>
      ))}
    </>
  );
}
