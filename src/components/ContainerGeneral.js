import React from 'react';
import book from '../images/book.png';
import Styled from 'styled-components';
import { Watermark } from '../styles/styles';
import ContainerCreate from './ContainerCreate';
import ContainerBehavior from './ContainerBehavior';
import ContainerStructure from './ContainerStructure';

const Container = Styled.div`
  margin: auto;
  width: 800px;
  display: flex;
  height: 1070px;
  font-size: 14px;
  text-align: center;
  justify-content: center;
  border: 5px solid black;
`;

const ContainerImage = Styled.div`
  top: 350px;
  z-index: 1;
  width: 300px;
  height: 300px;
  position: absolute;
  border-radius: 50%;
  background-color: rgba(0,0,0, .5);
`;

const Image = Styled.img`
  top: -50px;
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