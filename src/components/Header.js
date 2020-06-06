import React from 'react';
import headerPic from '../assets/headerPic.png';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { IoIosMenu } from 'react-icons/io';
import { GoSearch } from 'react-icons/go';

const Main = styled.div`
    background-image: url(${headerPic});
    background-image: url(${headerPic}), linear-gradient(red, yellow);
    background-size: cover;
    color: #ffffff;
    height: 70vh;
    font-family: 'Para Font';
    background-position: center;
` 
const StyledRow = styled(Row)`
    text-align: center;
    padding-top: 30px;
    font-size: 11px;
    font-weight: bold;
`;

const Belmont = styled(Col)`
    font-size: 23px;
    letter-spacing: 1px;
    font-weight: normal;
`

const Title = styled(Col)`
    padding-top: 10px;
    font-size: 50px;
    font-weight: normal;
    letter-spacing: 2px;
    line-height: 150%;
`
const SubTitle = styled.p`
    font-size: 11px;
    color: #c17a62;
    font-weight: bold;
    letter-spacing: 1px;
`
const Menu = styled(Col)`
    text-align: right;
    display: inline-flex;
    justify-content: flex-end;
`

const Register = styled(Col)`
    text-align: left;
    display: inline-flex;
`

const MenuIcon = styled(IoIosMenu)`
    font-size: 40px;
    margin-right: 20px;
`

const SearchIcon = styled(GoSearch)`
    font-size: 20px;
    transform: rotate(90deg);
    margin-left: 20px;
`

const Header = (props) => {
        return(
            <Main className="header">
                <StyledRow>
                    <Menu col={2}>
                        <MenuIcon/> 
                        <p>MENU</p>
                    </Menu>
                    <Belmont col={8}> 
                        BELMONT<br/>
                        GRANGE
                    </Belmont>
                    <Register col={2}>
                        <p>REGISTER</p>
                        <SearchIcon/>
                    </Register>
                </StyledRow>
                <StyledRow>
                    <Title col={12}>
                        <SubTitle>LATEST</SubTitle>
                        NEWS
                    </Title>
                </StyledRow>
            </Main>
        )
    
}

export default Header