import React from 'react';
import { GeneralContainer, GeneralContainerTitle } from '../styles/styles';
import { GeneralContainerText, GeneralContainerSubTitle } from '../styles/styles';

const ContainerCreate = (props) => {
  return (
    <GeneralContainer leftSize="-20px" color="#c64a3e" cut="polygon(0 0, 0 100%, 0 100%, 100% 70%, 100% 0)" >
      <GeneralContainerTitle>
        Creacionales
      </GeneralContainerTitle>
      <GeneralContainerText topText="0">
        Restringen o controlan la forma en que creamos los objetos,
        evitando que el usuario utilice la instrucción new para crear nuevas instancias
      </GeneralContainerText>
      <GeneralContainerSubTitle textAlign="left">
        <h4>Abstract Factory</h4>
        <h4>Factory Method</h4>
        <h4>Object Pool</h4>
        <h4>Prototype</h4>
        <h4>Singleton</h4>
        <h4>Builder</h4>
      </GeneralContainerSubTitle>
    </GeneralContainer>
  );
}

export default ContainerCreate;