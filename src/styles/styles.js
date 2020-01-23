import Styled from 'styled-components';

export const GeneralContainer = Styled.div`
  width: 330px;
  height: 650px;
  font-size: 14px;
  position: relative;
  left: ${props => props.leftSize};
  clip-path: ${props => props.cut};
  background-color: ${props => props.color};
`;

export const GeneralContainerTitle = Styled.div`
  width: ${props => props.width};
  color: white;
  font-size: 25px;
  margin: ${props => props.marginTop || '20px' } ${props => props.marginLeft || '40px' };
  padding: 15px 50px;
  border-radius: 10px;
  background-color: rgba(0,0,0,.5);
`;

export const GeneralContainerText = Styled.div`
  font-size: 20px;
  margin: 0px 40px;
  text-align: justify;
  padding: ${props => props.topText} ${props => props.sideText} 0 ${props => props.sideText};
`;

export const GeneralContainerSubTitle = Styled.div`
  font-size: 1.3em;
  line-height : 2px;
  font-weight: bold;
  margin: 40px 40px 0px 40px;
  margin-top: ${props => props.topText};
  text-align: ${props => props.textAlign};
`;

export const Watermark = Styled.div`
  top: 310px;
  left: 20px;
  color: white;
  font-size: 30px;
  position: absolute;
`;