import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';


const NavBarStyled = styled.header `
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div `
  display: flex;
  align-items: center;
`;

const H1 = styled.h1 `
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img `
  width: 50px;
`; 

const Button = styled.a `

  display: inline-block;
  padding: .75rem 1.25rem;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: .15rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  z-index: 1;

:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #bfbfbf;
  border-radius: 10rem;
  z-index: -2;
}

:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #D49073;
  transition: all .3s;
  border-radius: 10rem;
  z-index: -1;
}
:hover {
  color: #fff;
}
:hover:before {
  width: 100%;
}
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MrDonald's</H1>
    </Logo>
    <Button>войти</Button>
  </NavBarStyled>

)