import styled from 'styled-components';
import { defaultTheme } from '../../theme';

const background = require('../../assets/images/background.svg');

export interface AvatarProps {
  avatar?: any;
}

export const Background = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: ${defaultTheme.colors.primary.background};
  background-position: top -50%;
  background-repeat: no-repeat;
  //background-color: ${defaultTheme.colors.primary.backgroundHeader};
  background-image: url(${background.default});
  background-size: 100%;
  width: 414px;
`;

export const Top = styled.div`
  // height: 254px;
  padding: 30px 16px 0 16px;
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

export const TopLabel = styled.div`
  color: ${defaultTheme.colors.primary.contrast};
  font-size: 24px;
  font-weight: 300;
  font-style: italic;
  font-family: ${defaultTheme.fontFamily.primary};
  margin-top: 6px;
`;

export const Email = styled.div`
  font-size: 14px;
`;

export const Title = styled.div`
  font-size: 20px;
  color: ${defaultTheme.colors.primary.main};
  font-family: ${defaultTheme.fontFamily.primary};
  font-weight: 400;
  font-style: italic;
`;

export const Line = styled.div`
  width: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-bottom: 3px solid ${defaultTheme.colors.primary.main};
  opacity: 0.2;
`;

export const TopLogo = styled.div`
  height: 56px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: ${defaultTheme.colors.primary.main};
`;

export const ButtonFooter = styled.div`
  display: flex;

  @media screen and (min-width: 600px) {
    justify-content: flex-end;
  }
`;

export const Content = styled.div`
  font-family: ${defaultTheme.fontFamily.primary};
  font-weight: 500;
  font-size: 14px;
  padding: 16px 16px;
  // position: absolute;
`;
