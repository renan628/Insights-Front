import styled from 'styled-components';
import { defaultTheme } from '../../theme';

const background = require('../../assets/images/background.svg');

export interface AvatarProps {
  avatar?: any;
}

export const Top = styled.div`
  height: 244px;
  background-size: 100%;
  background-position: bottom;
  background-color: ${defaultTheme.colors.primary.backgroundHeader};
  background-image: url(${background.default});
  padding: 40px 16px 0 16px;
`;

export const Avatar = styled.div<AvatarProps>`
  height: 56px;
  width: 56px;
  border-radius: 56px;
  background-size: 60px;
  background-position: center;
  border: 3px solid ${defaultTheme.colors.primary.main};
  background-image: url(${(props) => props.avatar});
`;

export const Name = styled.div`
  color: ${defaultTheme.colors.primary.contrast};
  font-size: 24px;
  font-weight: 300;
  font-style: italic;
  font-family: ${defaultTheme.fontFamily.primary};
  margin-top: 6px;
`;

export const TopLogo = styled.div`
  height: 56px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: ${defaultTheme.colors.primary.main};
`;

export const Background = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: ${defaultTheme.colors.primary.background};
  max-width: 414px;
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
