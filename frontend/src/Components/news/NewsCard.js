//Autor: Abraham Espinoza

import React, { useState } from "react";
import '../../css/News.css';

// Componente reutilizable NewsCard que acepta props para título, descripción, imagen y fecha
const NewsCard = ({ title, description, imageUrl, date }) => {
// Definir estado para saber si la tarjeta está expandida o no
const [expanded, setExpanded] = useState(false);

// Función para manejar el click en la tarjeta, cambia el estado de expandido
const handleCardClick = () => {
setExpanded(!expanded);
};

// Renderizar la tarjeta, la imagen, el contenido y la fecha se muestran siempre
// Si la tarjeta no está expandida, también se muestra la fecha
// Si la tarjeta está expandida, se muestra un contenido adicional con la fecha y la descripción
return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        {!expanded && <p className="card-date">{date}</p>}
      </div>
      {expanded && (
        <div className="card-expanded-content">
          <p className="card-date">{date}</p>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

// Exportar el componente NewsCard para poder utilizarlo en otras partes de la aplicación
export default NewsCard;
