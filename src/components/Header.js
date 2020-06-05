import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';

const Header = (props) => {
    return(
        <div>
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
        </div>
    )
}

export default Header