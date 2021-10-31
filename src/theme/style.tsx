import styled from 'styled-components';
import { defaultTheme } from './index';
import { FlexProps } from './types';

export const Title = styled.label`
  color: ${defaultTheme.colors.primary.contrast};
  font-size: 24px;
  font-family: ${defaultTheme.fontFamily.secondary};
`;

export const SubTitle = styled.label`
  color: ${defaultTheme.colors.primary.contrast};
  font-size: 24px;
  font-family: ${defaultTheme.fontFamily.secondary};
`;

export const Prefix = styled.label`
  color: ${defaultTheme.colors.primary.main};
  font-size: 24px;
  font-family: ${defaultTheme.fontFamily.secondary};
`;

export const Header = styled.div`
  color: ${defaultTheme.colors.primary.contrast};
  font-size: 48px;
  font-family: ${defaultTheme.fontFamily.primary};
  margin-top: 40px;
`;

export const Text = styled.div`
  color: ${defaultTheme.colors.primary.contrast};
  font-size: 18px;
  font-family: ${defaultTheme.fontFamily.primary};
  margin-top: 40px;
  font-weight: 300;
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justify || ''};
  align-items: ${(props) => props.align || ''};
  flex-direction: ${(props) => props.direction || 'row'};
  // width: 100%;
`;
