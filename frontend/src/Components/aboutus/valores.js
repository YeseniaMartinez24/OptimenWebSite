import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import ap1 from '../../img/AboutUs/airplane.png';
import ap2 from '../../img/AboutUs/airplane2.png';
import ap3 from '../../img/AboutUs/CABINA3.png';
import {  FormattedMessage } from "react-intl";



function Valores () {
    return(
        <div className='container' >
<div className='col-md-6'>
<div className='column1'>
        <div className='card-body'>
         <div className='card-title'>
           <h3><FormattedMessage id="vall.mis" defaultMessage="MISSION"/></h3>
           <hr style={{ color:"#000000", background:"black" }}></hr>
           <p className="card-text text-secondary">Support and facilitate Air Lines around the  <br/>
              world to maintain reliable and sustainable  <br/>
              operations through Technology, Innovation  <br/>
              and living our Values.
            </p>
          </div>
        </div>
      </div>
      <div className='column2'>
  
        <div className='card-body'>
          <div className='card-title'>
            <h3><FormattedMessage id="vall.vis" defaultMessage="VISION"/></h3>
            <hr></hr>
            <p className='card-text text-secondary'>To be the First option in Software, Technology <br/>
            and Innovation services for the global Airlines in <br/>
            the area of Aeronautical operational control.
            </p>
          </div>
        </div>
      </div>
      <div className='column3'>
        
        <div className='card-body'>
            <div className='card-title'>
              <h3><FormattedMessage id="vall.val" defaultMessage="VALUES"/></h3>
              <hr ></hr>
              <p className="card-text text-secondary">
                 Trustworthy <br/>
                 Respect <br/>
                 Integrity <br/>
                 Teamwork <br/>
                 InnovationSupport 
              </p>
            </div>
          </div>
        </div>
</div>
<div class="section-title" data-aos="fade-up">
  <h2>Airline Experience</h2>
    <CardGroup >
        <Card>
        <Card.Img variant="top" src={ap1} alt="Mi imagen" style={{ margin: '10px', borderRadius:'100%', marginLeft: '120px',width: '200px', height: '190px'}} />
        <Card.Body>
          <Card.Text>
          Associated with long experience in the Airline Industry with high trust and tight relation with commercial airlines and industry key players.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={ap2} alt="Mi imagen" style={{ margin: '10px', borderRadius:'100%', marginLeft: '110px',width: '200px', height: '190px', overflow: 'hidden' }} />
        <Card.Body>
          <Card.Text>
          Associated with long experience in the Airline Industry with high 
          trust and tight relation with commercial airlines and industry key players.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={ap3} alt="Mi imagen" style={{  margin: '10px', borderRadius:'100%', marginLeft: '120px',width: '200px', height: '190px', overflow: 'hidden' }} />
        <Card.Body>
          <Card.Text>
          Strong Project Management following the industry best practices.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>   
  </div>
</div>


    );
}

export default Valores