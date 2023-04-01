//Autor: Carlos

// Importar las dependencias y los archivos necesarios
import React from 'react'; // React es una biblioteca de JavaScript para crear interfaces de usuario.
import '../../css/Innovation.css' // Se importa la hoja de estilos CSS correspondiente.

import hannover from '../../img/innovation/Hannover_Messe.png'; // Se importa la imagen de la feria Hannover Messe.
import ana from '../../img/innovation/ana_avatar_XPrize.jpeg'; // Se importa la imagen del concurso ANA Avatar XPrize.
import innovation from '../../img/innovation/innovation_hub_Optimen.png'; // Se importa la imagen del centro de innovación de Optimen.
import educate from '../../img/innovation/Educate_Optimen.png'; // Se importa la imagen de Educate Optimen.
import { FormattedMessage } from "react-intl"; // Se importa la biblioteca de internacionalización React Intl para manejar los mensajes en varios idiomas.

// Se define la lista de objetos 'cards' que contendrá información sobre los diferentes proyectos de innovación de la empresa.
const cards = [
  {
    title: "Hannover Messe",
    image: hannover,
    description: "Optimen family present at 'Industrial Transformation Mexico, Hannover Messe'. HANNOVER MESSE is the most important international platform and hot spot for industrial transformation - with excellent innovations or unusual products.",
  },
  {
    title: "Ana Avatar XPrize",
    image: ana,
    description: "Optimen teamed up with Inbiodroid are working together on ANA Avatar XPRIZE challenge that aims to create an Avatar system that can transport human presence to a remote location in real time.",
  },
  {
    title: "Innovation Hub",
    image: innovation,
    description: "Optimen inaugurated its innovation center, a space focus on competencies development for the aeronautical sector.",
  },
  {
    title: "EDUCATE OPTIMEN",
    image: educate,
    description: "EDUCATE OPTIMEN",
  },
];

// Se define el componente de React llamado 'Innovation'.
const Innovation = () => {
  return (
    <div className=''>
        <h1 className='services-center' ><FormattedMessage id="Home.innovation" defaultMessage="Innovation"/></h1>
      <div className="boxesContainer">
        {cards.map((card) => (
          <div className="cardBoxs" key={card.title}>
            <div className="card-inno">
              <div className="front-inno">
                <h2>{card.title}</h2>
                <img src={card.image} alt={card.title} width="200" height="150"/>
              </div>
              <div className="back-inno">
                <h2>{card.title}</h2>
                <h6>{card.description}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Innovation;
