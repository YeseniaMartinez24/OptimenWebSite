//Autor: Abraham Espinoza

import React, { useState } from "react"; // Se importa React y useState desde la biblioteca React.
import "../../css/News.css"; // Se importa un archivo CSS que contiene estilos para la lista de noticias.

const newsList = [
  // Se define una lista de noticias con un objeto para cada noticia.
  {
    id: 1,
    title: "Título de la noticia 1",
    description: "Descripción de la noticia 1",
    image:
      "https://cdn.pixabay.com/photo/2022/12/02/05/13/dog-7630252_1280.jpg",
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
    image:
      "https://cdn.pixabay.com/photo/2023/03/12/02/04/spot-billed-pelican-7845682_1280.jpg",
    date: "2023-03-19",
  },
];

function NewsCard() {
  // Se define el componente de noticias.

  const [news, setNews] = React.useState([]); // Se define un estado llamado 'news' como un arreglo vacío y una función 'setNews' para actualizarlo.

  React.useEffect(() => {
    // Se define un efecto que se ejecutará después de que el componente se monte.
    fetch("/resources/News") // Se realiza una solicitud a la URL '/resources/News' para obtener noticias.
      .then((response) => response.json()) // Se convierte la respuesta a un objeto JSON.
      .then((data) => {
        console.log(data);
        setNews(data); // Se actualiza el estado 'news' con los datos obtenidos de la solicitud.
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log("News", news);

  const [selectedNews, setSelectedNews] = useState(null); // Se define un estado llamado 'selectedNews' como null y una función 'setSelectedNews' para actualizarlo.

  function handleNewsClick(news) {
    // Se define una función que maneja el clic en una noticia.
    setSelectedNews(news); // Se actualiza el estado 'selectedNews' con la noticia seleccionada.
  }

  function handleBackClick() {
    // Se define una función que maneja el clic en el botón 'Volver'.
    setSelectedNews(null); // Se actualiza el estado 'selectedNews' como null para volver a la lista de noticias.
  }

  if (selectedNews) {
    // Si se ha seleccionado una noticia, se muestra su detalle.
    return (
      <div className="news-details">
        <button onClick={handleBackClick}>Volver</button>
        <h2>{selectedNews.title}</h2>
        <div className="news-img">
          <img src={selectedNews.image} alt={selectedNews.title} />
        </div>
        <p>{selectedNews.description}</p>
        <span>{selectedNews.date}</span>
      </div>
    );
  }

  return (
    // Si no se ha seleccionado ninguna noticia, se muestra la lista de noticias.
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

export default NewsCard;
