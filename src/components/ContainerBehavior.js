import React from 'react';
import Logo from '../images/logo.png';
import Styled from 'styled-components';
import { GeneralContainerTitle } from '../styles/styles';
import { GeneralContainerText, GeneralContainerSubTitle } from '../styles/styles';

const Container = Styled.div`
  top: 490px;
  width: 700px;
  margin: auto;
  height: 485px;
  font-size: 14px;
  position: absolute;
  background-color: #e3a252;
  clip-path: polygon(0 43%, 50% 0, 100% 43%, 100% 100%, 0% 100%);
`;

const ContainerFlex = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${props => props.sideText};
  margin-top: ${props => props.marginTop};
`;

const Image = Styled.img`
  width: 250px;
`;

const ContainerBehavior = (props) => {
  return (
    <Container>
      <GeneralContainerText topText="200px" sideText="30px">
        colaboración, relaciones y delegación de responsabilidades
        entre otras clases logrando con esto simplificar la forma en
        que los objetos se comunican e interactúan entre si
      </GeneralContainerText>
      <ContainerFlex marginTop="-40px" sideText="30px">
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
        <GeneralContainerTitle width="180px" marginLeft="20px">
          Comportamiento
        </GeneralContainerTitle>
        <Image src={Logo} alt="Logo"/>
      </ContainerFlex>
    </Container>
  );
}

export default ContainerBehavior;