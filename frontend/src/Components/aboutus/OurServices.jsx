//Autor: Alma Yessenia

import '../../css/Services.css'; // importa el archivo CSS para estilos específicos de esta sección

import React from 'react'; // importa la librería React
import Card from 'react-bootstrap/Card'; // importa el componente Card de la librería React Bootstrap

import Auditing from '../../img/servicio/AUDITING.png'; // importa la imagen de auditoría
import Consultancy from '../../img/servicio/CONSULTANCY.png'; // importa la imagen de consultoría
import Implementation from'../../img/servicio/IMPLEMENTATION.png'; // importa la imagen de implementación
import Interfaces from '../../img/servicio/INTERFACES.png'; // importa la imagen de desarrollo de interfaces
import Innovation from '../../img/servicio/INNOVATION.png'; // importa la imagen de innovación
import Business from '../../img/servicio/BUSINESS.png'; // importa la imagen de desarrollo de reglas de negocio

const Services = () => { // crea el componente Services como una función
    return (
      <div  >
          <h1 className='services-center' >Our Services</h1>
      <div className="card-container" style={{marginBottom:"6px", marginTop:"5px"}}>
        <div id="cardServ" ><Card.Img variant="top" src={Auditing}   height= "170px" object-position="50% 50%" />
          AUDITING
          <hr></hr>
          <Card.Text  style={{ color: "black", fontSize: '16px'}}>Auditing and process improvement </Card.Text>
        </div>
        <div id="cardServ"><Card.Img variant="top" src={Consultancy}   height= "170px" object-position="50% 50%"/>
          CONSULTANCY
          <hr></hr>
          <Card.Text  style={{ color: "black", fontSize: '16px'}}>Consultancy Services </Card.Text>
        </div>
        <div id="cardServ"><Card.Img variant="top" src={Implementation}  height= "170px" object-position="50% 50%"/>
          IMPLEMENTATION OUTSOURCING
          <hr></hr>
          <Card.Text  style={{ color: "black", fontSize: '16px'}}>Implement Aircraft and Crew Tracking Systems and Optimizers </Card.Text>
        </div>
        <div id="cardServ"><Card.Img variant="top" src={Interfaces}  height= "170px" object-position="50% 50%"/>
          INTERFACES DEVELOPMENT
          <hr></hr>
          <Card.Text  style={{ color: "black", fontSize: '16px'}}>Development of Integrations / Interfaces for computer systems </Card.Text>
        </div>
        <div id="cardServ"><Card.Img variant="top" src={Innovation}  height= "170px" object-position="50% 50%"/>
          INNOVATION
          <hr></hr>
          <Card.Text  style={{ color: "black", fontSize: '16px'}}>Innovation and Development of new systems </Card.Text>
        </div>
        <div id="cardServ"><Card.Img variant="top" src={Business}  height= "170px" object-position="50% 50%"/>
          BUSINESS RULES DEVELOPMENT
          <hr></hr>
          <Card.Text  style={{ color: "black", fontSize: '16px'}}>Development of business rules for resource management </Card.Text>
        </div>
      </div>
    </div>
 
    );
    }
    

export default Services

