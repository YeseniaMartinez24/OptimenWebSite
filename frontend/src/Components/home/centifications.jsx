import React from "react";
import "../../css/certifications.css";
import esr from "../../img/Home/certifications/esr.png";
import gto from "../../img/Home/certifications/marca-gto.png";
import iso from "../../img/Home/certifications/ISO27001.png";
import boeing from "../../img/Home/certifications/img.png";
import {  FormattedMessage } from "react-intl";



const Certifications = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-header">
        <h4 className="certifications-title"><FormattedMessage id="Certi.text" defaultMessage="Awards and Certifications"/></h4>
      </div>
      <div className="certifications-body">
        <div className="certification">
          <img src={esr} alt="ESR Certification" className="certification-image" style={{ width: "140px", height: "50px" }} />
        </div>
        <div className="certification">
          <img src={gto} alt="GTO Certification" className="certification-image" style={{ width: "80px", height: "76px" }} />
        </div>
        <div className="certification" >
          <img src={iso} alt="ISO 27001 Certification" className="certification-image" style={{ width: "80px", height: "76px" }} />
        </div>
        <div className="certification" >
          <img src={boeing} alt="Boeing Certification" className="certification-image" style={{ width: "150px", height: "80px" }} />
        </div>
      </div>
    </div>
  );
};

export default Certifications;
