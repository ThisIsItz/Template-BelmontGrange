import React from 'react';
import headerPic from '../assets/headerPic.png'
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components'

const Main = styled.div`
    background-image: url(${headerPic});
    background-size: cover;
    color: #ffffff;
    height: 100vh;
    width: 100vw;
` 

const Header = (props) => {
    return(
        <Main className="header">
            <Row>
                <Col col={3}>
                    Menu
                </Col>
                <Col col={5}> 
                    Belmont Grange
                </Col>
                <Col col={3}>
                    Register
                </Col>
            </Row>
            <Row>
                <Col col={12}>
                    Newest
                </Col>
            </Row>
        </Main>
    )
}

export default Header