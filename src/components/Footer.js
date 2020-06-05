import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

const Footer = (props) => {
    return(
    <div>
        <Row>
            <Col col={4}>
                Location
            </Col>
            <Col col={3}>
                BELMONT BLA BLA
            </Col>
            <Col col={4}>
                Contact news
            </Col>
        </Row>
        <Row>
            <Col col={12}>
                Enter email
            </Col>
        </Row>
        <Row>
            <Col col={12}>
                Icons
            </Col>
        </Row>

    </div>)
}

export default Footer