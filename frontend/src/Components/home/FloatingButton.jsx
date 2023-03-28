import React, { useContext, useState } from 'react';
import '../../css/FloatingButton.css';
import ES from '../../img/Home/espana.png';
import ING from '../../img/Home/english.png';
import idiomas from '../../img/Home/idioma.png';

import { langContext } from '../../context/langContext';



const FloatingButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const idioma = useContext(langContext);


  return (
    <div className="floating-button" onClick={toggleOptions}>
      <img src={idiomas} alt="language" />
      {showOptions && (
        <div className="language-options">
          <button onClick={() => idioma.establecerLenguaje('en-US')}>
            <img src={ING} alt="English" />
          </button>
          <button onClick={() => idioma.establecerLenguaje('es-MX')}>
            <img src={ES} alt="Español" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
