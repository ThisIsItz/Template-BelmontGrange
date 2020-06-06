import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components'
import elements from './elements'

const Main = styled.div`
    background: #efeee9;
    color: #c17a62;
    text-align: center;
    font-family: 'Para Font';
` 
const Input = styled.input`
    width: 80%;
    background: #e5e5e0;
    border: none;
    margin-top: 20px;
    font-weight: bold;
    font-size: 11px;
    height: 35px;
    padding-left: 20px;
    letter-spacing: 1px;
`
const ProvisionalRow = styled(Row)`
    height: 200vh;
`
const Button = styled.button`
    border: 1px solid #c17a62;
    color: #c17a62;
    padding: 10px;
    margin-top: 70px;
    width: 170px;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1.5px;
    cursor: pointer;
    margin-bottom: 90px;

    &:hover {
        color: #efeee9;
        background: #c17a62;
      }
` 

const Updates = styled.p`
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1.5px;
`
const Title = styled.p`
    font-size: 50px;
    letter-spacing: 5px;
    padding: 0 50px 0 50px;
`

const Text = styled.p`
    margin: 0 40px 0 40px;
    font-size: 18px;
    letter-spacing: 1.5px;
`

const StyledCol = styled(Col)`
    margin-top: 50px;
    padding: 70px;
`

const Content = styled(Row)`
    background: white;
    position: absolute;
    margin-top: -90px;
    width: 85vw;
    left: 0;
    right: 0;
    margin-left: auto !important;
    margin-right: auto !important;
`

const Image = styled.img`
      width: 300px;
      height: 200px;
      object-fit: cover;
      margin-top: 15px;
`

const Date = styled.p`
      color: #c8c8c7;
      font-size: 11px;
      font-weight: bold;
`

const StyledRow = styled(Row)`
      margin-top: 20px;
      padding-left: 50px !important;
      padding-right: 50px !important;
`

const Body = (props) => {
    return(
        <Main>
            <ProvisionalRow>
                  <Col col={12}>
                    <Content>
                        {elements.map(e => 
                            <Col col={4} id={e.id}>
                                <Date>{e.date}</Date>
                                <Image src={e.image}/>
                                <p>{e.text}</p>
                            </Col>
                        )}
                    </Content>
                  </Col>
            </ProvisionalRow>
            <StyledRow>
                <StyledCol col={6}>
                    <Input type="dropdown" placeholder="TITLE"/>
                    <Input placeholder="NAME"/>
                    <Input placeholder="EMAIL ADDRESS"/>
                    <Input placeholder="TELEPHONE"/>
                </StyledCol>
                <Col col={6}>
                    <Updates>UPDATES</Updates>
                    <Title>JOIN THE CLUB</Title>
                    <Text>Sed posuere consectetur est at lobortis.<br/>
                        Aenean eu leo quam. Pellentesque ornare sem
                        lacinia quam venetatis vestibulum. Curabitur 
                        blandit tempus porttitor. Etiam porta sem
                        malesuada magna mollis euismod.
                    </Text>
                </Col>
            </StyledRow>
            <Row>
                <Col col={12}>  
                    <Button>SUBMIT</Button>
                </Col>
            </Row>
        </Main>)
}

export default Body