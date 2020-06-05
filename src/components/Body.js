import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components'

const Main = styled.div`
    background: #efeee9;
    color: #c17a62;
    height: 300vh;
` 

const Body = (props) => {
    return(
        <Main className="body">
            <Row>
                <Col col={12}>
                 EMPTY
                </Col>
            </Row>
            <Row>
                <Col col={5}>
                    FORM
                </Col>
                <Col col={5}>
                    JOIN THE CLUB
                </Col>
            </Row>
            <Row>
                <Col col={12}>  
                    submit button
                </Col>
            </Row>
        </Main>)
}

export default Body