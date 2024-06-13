import { ContainerProps } from "./interface";
import * as S from './styles';

export const Container = ({ children }: ContainerProps) => {
  return <S.Container>{children}</S.Container>;
}