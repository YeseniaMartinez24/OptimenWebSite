import React from 'react';
import '../../css/innovation.css'

import hannover from '../../img/innovation/Hannover_Messe.png';
import ana from '../../img/innovation/ana_avatar_XPrize.jpeg';
import innovation from '../../img/innovation/innovation_hub_Optimen.png';
import educate from '../../img/innovation/Educate_Optimen.png';
import {  FormattedMessage } from "react-intl";


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
