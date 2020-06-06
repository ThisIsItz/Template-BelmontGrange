import React from "react";
import { Container } from 'styled-bootstrap-grid';
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import './index.css'
import GlobalFonts from '../fonts/fonts';
 
export default (props) =>
<div>
    <GlobalFonts />
    <Container fluid>
      <Header/>
    </Container>
    <Container fluid>
      <Body/>
    </Container>
    <Container fluid>
      <Footer/>
    </Container>
</div>;