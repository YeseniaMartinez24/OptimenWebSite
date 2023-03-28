import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

import Logo from '../img/nadvar/logo_optimenn.ico';
import {  FormattedMessage } from "react-intl";


export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);



  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
      <MDBNavbarBrand href='/'>
            <img
              src={Logo}
              height='40'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='/Dashboard'>
            <FormattedMessage id="menu.home" defaultMessage="Home"/>
            </MDBNavbarLink>
            <MDBNavbarLink href='/About-Us'><FormattedMessage id="menu.aboutUs" defaultMessage="About Us"/></MDBNavbarLink>
            <MDBNavbarLink href='/Customers'><FormattedMessage id="menu.customers" defaultMessage="Customers"/></MDBNavbarLink>
            <MDBNavbarLink href='/News'><FormattedMessage id="menu.news" defaultMessage="News"/></MDBNavbarLink>
            <MDBNavbarLink href='/Contact-Us'><FormattedMessage id="menu.contactUs" defaultMessage="Contact Us"/></MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}