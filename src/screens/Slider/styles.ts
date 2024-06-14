import styled from 'styled-components/native';
import { useResponsive } from '../../hooks/useResponsive';
import { colors, fonts } from '../../theme';


export const SlideContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${useResponsive(18)};
  font-family: ${fonts.title};
  text-align: center;
  color: ${colors.royalBlue};
  width: 60%;
`
export const Description = styled.Text`
  font-size: ${useResponsive(14)};
  font-family: ${fonts.text};
  text-align: center;
  color: ${colors.royalBlue};
  width: 75%;
`;
export const Image = styled.Image`
  width: 100%;
  height: 400px;
  margin: 20px 0;
`

export const DoneButton = styled.TouchableOpacity`
  background: ${colors.royalBlue};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`
export const DoneText = styled.Text`
  font-size: ${useResponsive(14)};
  font-family: ${fonts.text};
  text-align: center;
  color: ${colors.background};
`