import styled from 'styled-components';
import { defaultTheme } from '../../theme';

export const Top = styled.div`
  padding: 0 10vw;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Background = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: ${defaultTheme.colors.secondary.main};
  width: 100%;
`;

export const Footer = styled.div`
  background-color: ${defaultTheme.colors.secondary.dark};
  font-family: ${defaultTheme.fontFamily.primary};
  height: calc(310px - 8vh);
  bottom: 0;
  padding: 8vh 10vw 0 10vw;

  //@media screen and (min-height: 820px) {
  //  margin-top: 20px;
  //  position: absolute;
  //}
  //
  //@media screen and (max-height: 820px) {
  //  margin-top: 30px;
  //}
`;

export const TitleFooter = styled.div`
  color: ${defaultTheme.colors.primary.light};
  font-size: 14px;
  font-weight: normal;
`;

export const LinkFooter = styled.div`
  color: ${defaultTheme.colors.secondary.contrast};
  font-size: 16px;
`;

export const ButtonFooter = styled.div`
  display: flex;

  @media screen and (min-width: 600px) {
    justify-content: flex-end;
  }
`;

export const Content = styled.div`
  padding: 10vh 10vw;
  min-height: calc(92vh - 310px);
`;
