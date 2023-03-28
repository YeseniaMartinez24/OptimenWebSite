import '../../css/Pag.css';
import Customer from '../customer/customer';
import Customs from '../customer/customs';

function customers() {
  return (
    <div className="App">

      <body className="App-link">
      <h1 className='titulo-Custom'>Our Customers</h1>

      <div className="textio">
      <h3>Through our capabilities, the services we provide, 
       and our commitment, we implement projects resulting
       in satisfied clients and success stories.</h3>
      </div>
      
      <Customer/>

      <h1 className='titulo-Custom'>Our Project Experience</h1>

      <div className="textio">

      <h3>Through our experience as certified Jeppesen/Boeing 
       consultants, we contribute to the support of the 
       configuration and customization of state-of-the-art optimization
       software for several key airlines in the aeronautical sector
       at an international level.</h3>

      </div>

       <Customs/>

       
      </body>
    </div>
  );
}

export default customers;