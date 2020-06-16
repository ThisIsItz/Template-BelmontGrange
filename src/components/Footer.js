import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'

const Main = styled.div`
    background: #26203a;
    color: #c17a62;
    height: 60vh;
    font-family: 'Para Font';
` 
const StyledRow = styled(Row)`
    text-align: center;
    padding-top: 60px;
    font-size: 25px;
    line-height: 150%;
    justify-content: center;
`;

const StyleList = styled.ul`
    background: none;
    list-style-type: none;
    padding: 0;
    font-weight: bold;
    font-size: 10px;
    line-height: 200%;
`

const Input = styled.input`
    width: 80vw;
    background: transparent;
    border-bottom-color: #c17a62;
    outline: 0;
    border-width: 0 0 2px;

    ::placeholder {
        color: #c17a62;
        font-size: 15px;
        letter-spacing: 1.5px;

`

const StyledCol = styled(Col)`
    text-align: center;
` 

const StyleIcons = styled(Col)`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    font-size: 17px;
    max-width: 200px;
    cursor: pointer;
`

const LeftList = styled(Col)`
    display: flex;
    justify-content: flex-end;
`

const RightList = styled(Col)`
    display: flex;
    justify-content: flex-start;
`
const Small = styled.p`
    font-size: 9px;
    font-weight: bold;
`

const Title = styled(Col)`
    line-height: 2%;
`

class Footer extends React.Component {
    render() {
        return(
        <Main className="footer">
            <StyledRow>
                <LeftList col={4}>
                    <StyleList>
                        <li>LOCATION</li>
                        <li>DEVELOPMENT</li>
                        <li>LIFESTYLE</li>
                        <li>TEAM</li>
                    </StyleList>
                </LeftList>
                <Title col={4}>
                    <Small>ROSSET GREEN LANE</Small><br/>
                    <p>BELMONT</p>
                    <p>GRANGE</p>
                    <Small>HARROGATE</Small>
                </Title>
                <RightList col={4}>
                    <StyleList>
                        <li>CONTACT</li>
                        <li>NEWS</li>
                        <li>REGISTER</li>
                        <li>TERMS</li>
                    </StyleList>
                </RightList>
            </StyledRow>
            <StyledRow>
                <StyledCol col={12}>
                    <Input placeholder='Your Email Address'/>
                </StyledCol>
            </StyledRow>
            <StyledRow>
                <StyleIcons col={12}>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaFacebookF/>
                    <FaLinkedinIn/>
                    <FaYoutube/>
                </StyleIcons>
            </StyledRow>
        </Main>
        )
    }
}

export default Footer