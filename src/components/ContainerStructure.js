import React from 'react';
import { GeneralContainer, GeneralContainerTitle } from '../styles/styles';
import { GeneralContainerText, GeneralContainerSubTitle } from '../styles/styles';

const ContainerStructure = (props) => {
  return (
    <GeneralContainer leftSize="20px" color="#81be57" cut="polygon(0 0, 0 75%, 100% 100%, 100% 0, 100% 0)">
      <GeneralContainerTitle>
        Estructurales
      </GeneralContainerTitle>
      <GeneralContainerText>
        Describen cómo los objetos y clases se pueden combinar
        para formar estructuras más grandes y complejas
      </GeneralContainerText>
      <GeneralContainerSubTitle textAlign="right">
        <h4>Composite</h4>
        <h4>Decorator</h4>
        <h4>Flyweight</h4>
        <h4>Adapter</h4>
        <h4>Facade</h4>
        <h4>Bridge</h4>
        <h4>Proxy</h4>
      </GeneralContainerSubTitle>
    </GeneralContainer>
  );
}

export default ContainerStructure;