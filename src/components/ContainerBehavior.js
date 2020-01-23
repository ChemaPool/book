import React from 'react';
import logo from '../images/logo.png';
import Styled from 'styled-components';
import { GeneralContainerTitle } from '../styles/styles';
import { GeneralContainerText, GeneralContainerSubTitle } from '../styles/styles';

const Container = Styled.div`
  top: 525px;
  width: 800px;
  margin: auto;
  height: 550px;
  font-size: 14px;
  position: absolute;
  background-color: #e3a252;
  clip-path: polygon(0 30%, 50% 0, 100% 30%, 100% 100%, 0% 100%);
`;

const ContainerFlex = Styled.div`
  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = Styled.img`
  width: 250px;
`;

const ContainerBehavior = (props) => {
  return (
    <Container>
      <GeneralContainerText topText="200px">
        colaboración, relaciones y delegación de responsabilidades
        entre otras clases logrando con esto simplificar la forma en
        que los objetos se comunican e interactúan entre si
      </GeneralContainerText>
      <ContainerFlex>
        <GeneralContainerSubTitle>
          <h4>Iterator</h4>
          <h4>Mediator</h4>
          <h4>Memento</h4>
        </GeneralContainerSubTitle>
        <GeneralContainerSubTitle>
          <h4>Templete Method</h4>
          <h4>Strategy</h4>
          <h4>Chain of Resp</h4>
        </GeneralContainerSubTitle>
        <GeneralContainerSubTitle>
          <h4>Iterator</h4>
          <h4>Command</h4>
          <h4>Observer</h4>
        </GeneralContainerSubTitle>
      </ContainerFlex>
      <ContainerFlex>
        <GeneralContainerTitle width="180px">
          Comportamiento
        </GeneralContainerTitle>
        <Image src={logo} alt="Logo"/>
      </ContainerFlex>
    </Container>
  );
}

export default ContainerBehavior;