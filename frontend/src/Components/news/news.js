import React, { useState, useEffect } from "react";
import '../../css/news.css';
import axios from "axios";

const newsList = [

  {
    id: 1,
    title: "Título de la noticia 1",
    description: "Descripción de la noticia 1",
    image: "https://cdn.pixabay.com/photo/2022/12/02/05/13/dog-7630252_1280.jpg",
    date: "2023-03-20",
  },
  {
    id: 2,
    title: "Título de la noticia 2",
    description: "Descripción de la noticia 2",
    image: "https://media.tenor.com/Plbi9zuA910AAAAd/minecraft.gif",
    date: "2023-03-19",
  },
  {
    id: 3,
    title: "Título de la noticia 3",
    description: "Descripción de la noticia 2",
    image: "https://media0.giphy.com/media/139eZBmH1HTyRa/giphy.gif",
    date: "2023-03-19",
  },
  {
    id: 4,
    title: "Título de la noticia 4",
    description: "Descripción de la noticia 2",
    image: "https://cdn.pixabay.com/photo/2023/03/12/02/04/spot-billed-pelican-7845682_1280.jpg",
    date: "2023-03-19",
  },
];


function NewsCard() {

  const [news, setNews] = React.useState([]);

  const [users, setUser] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
  
  const getUsers = async () => {
    const response = await axios.get("http://localhost:4000/admin/resources/User");
    setUser(response.data);
    console.log(users);
  };

React.useEffect(()=>{
  fetch('/resources/News')
  .then((response)=>response.json())
  .then((data)=>{
    console.log(data);
    setNews(data);
  })
  .catch((err) => {
    console.log(err.message);
 });  }, []);

 console.log("News", news);


  const [selectedNews, setSelectedNews] = useState(null);

  function handleNewsClick(news) {
    setSelectedNews(news);
  }

  function handleBackClick() {
    setSelectedNews(null);
  }

  if (selectedNews) {
    return (
      <div className="news-details">
        <button onClick={handleBackClick}>Volver</button>
        <h2>{selectedNews.title}</h2>
        <div className="news-img">
        <img  src={selectedNews.image} alt={selectedNews.title} />
        </div>
        <p>{selectedNews.description}</p>
        <span>{selectedNews.date}</span>
      </div>
    );
  }

  return (
    <div>
      <h2>News</h2>
    <div className="news-list">
      {newsList.map((news) => (
        <div
          key={news.id}
          className="news-card"
          onClick={() => handleNewsClick(news)}
        >
          
          <img src={news.image} alt={news.title} />
          
          <div className="news-content">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <span>{news.date}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default NewsCard