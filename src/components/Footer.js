import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components'

const Foot = styled.div`
    background: #26203a;
    color: #c17a62;
    height: 40vh;
` 

class Footer extends React.Component {
    render() {
        return(
        <Foot className="footer">
            <Row>
                <Col col={3}>
                    Location
                </Col>
                <Col col={3}>
                    BELMONT BLA BLA
                </Col>
                <Col col={3}>
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
        </Foot>
        )
    }
}

export default Footer