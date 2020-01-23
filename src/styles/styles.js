import Styled from 'styled-components';

export const GeneralContainer = Styled.div`
  width: 380px;
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
  margin: 20px 40px;
  padding: 15px 50px;
  border-radius: 10px;
  background-color: rgba(0,0,0,.5);
`;

export const GeneralContainerText = Styled.div`
  font-size: 20px;
  margin: 0px 40px;
  text-align: justify;
  padding-top: ${props => props.topText};
`;

export const GeneralContainerSubTitle = Styled.div`
  font-size: 25px;
  line-height : 2px;
  font-weight: bold;
  margin: 40px 40px 0px 40px;
  text-align: ${props => props.textAlign};
`;

export const Watermark = Styled.div`
  top: 290px;
  color: white;
  font-size: 30px;
  position: absolute;
`;