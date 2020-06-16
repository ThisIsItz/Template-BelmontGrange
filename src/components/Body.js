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
    margin-top: -90px;
    width: 85vw;
    left: 0;
    right: 0;
    margin-left: auto !important;
    margin-right: auto !important;
    padding-left: 30px !important;
    padding-right: 30px !important;
`

const Image = styled.img`
      width: 95%;
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

const Description = styled.p`
      padding-top: 10px;
      padding-left: 30px;
      padding-right: 30px;
`

const ButtonSmall = styled.button`
    background: transparent;
    border: none;
    height: 40px;
    width: 40px;
    line-height: 20px;
    border: 3px solid #c17a62;
    margin: 20px;
    cursor: pointer;
    transform: rotate(45deg);
    color: #c17a62;

    &:hover{
        background: #c17a62;
        color: #ffffff;
    }
` 

const Span = styled.div`
    font-weight: bold;
    transform: rotate(-45deg);
`

const Body = (props) => {
    return(
        <Main>
                    <Content>
                        {elements.map(e => 
                            <Col col={12} sm={6} lg={4} id={e.id}>
                                <Date>{e.date}</Date>
                                <Image src={e.image}/>
                                <Description>{e.text}</Description>
                            </Col>
                        )}
                        <Col col={12}>
                            <ButtonSmall><Span>1</Span></ButtonSmall>
                            <ButtonSmall><Span>2</Span></ButtonSmall>
                            <ButtonSmall><Span>3</Span></ButtonSmall>
                            <ButtonSmall><Span>4</Span></ButtonSmall>
                        </Col>
                    </Content>
            <StyledRow>
                <StyledCol col={12} md={6}>
                    <Input type="dropdown" placeholder="TITLE"/>
                    <Input placeholder="NAME"/>
                    <Input placeholder="EMAIL ADDRESS"/>
                    <Input placeholder="TELEPHONE"/>
                </StyledCol>
                <Col col={12} md={6}>
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