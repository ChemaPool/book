import React from 'react';
import book from '../images/book.png';
import Styled from 'styled-components';
import { Watermark } from '../styles/styles';
import ContainerCreate from './ContainerCreate';
import ContainerBehavior from './ContainerBehavior';
import ContainerStructure from './ContainerStructure';

const Container = Styled.div`
  margin: auto;
  width: 700px;
  display: flex;
  height: 970px;
  font-size: 14px;
  text-align: center;
  justify-content: center;
  border: 5px solid black;
  font-family: Arial, Helvetica, sans-serif;
`;

const ContainerImage = Styled.div`
  top: 325px;
  z-index: 1;
  width: 340px;
  height: 340px;
  position: absolute;
  border-radius: 50%;
  background-color: rgba(0,0,0, .5);
`;

const Image = Styled.img`
  top: -25px;
  width: 250px;
  position: relative;
`;

const ContainerGeneral = (props) => {
  return (
    <Container>
      <ContainerImage>
        <Image src={book} alt="Book"/>
        <Watermark>
          patronesdediseño.com
        </Watermark>
      </ContainerImage>
      <ContainerCreate />
      <ContainerStructure />
      <ContainerBehavior />
    </Container>
  );
}

export default ContainerGeneral;