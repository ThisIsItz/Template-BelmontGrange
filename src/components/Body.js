import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';

const Body = (props) => {
    return(
        <div>
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
        </div>)
}

export default Body