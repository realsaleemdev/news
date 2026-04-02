import Header from "./components/header/Header";
import NewsList from "./components/NewsList";
import { newsData } from "./utils/data"
import "./styles.css";
import { useState } from "react";
export default function App() {
  const [news, setNews] = useState(newsData);
  const getKeyword = (event) => {
    let keyword = (event.target.value);
    let filtered = newsData.filter(item => {
      return item.title.indexOf(keyword)>-1;
    })
    setNews(filtered); 
  }
  return (
    <>
      <Header getKeyword={getKeyword} />
      <NewsList news={news} />
    </>
  );
}