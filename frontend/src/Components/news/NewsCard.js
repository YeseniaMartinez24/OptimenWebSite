import React, { useState } from "react";
import '../../css/news.css';

const NewsCard = ({ title, description, imageUrl, date }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

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

export default NewsCard;
