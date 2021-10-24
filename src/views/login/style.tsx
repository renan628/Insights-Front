import styled from 'styled-components';
import { defaultTheme } from '../../theme';

export const Top = styled.div`
  padding: 15px 10vw;
`;

export const Background = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: ${defaultTheme.colors.secondary.main};
  min-width: 100vw;
  width: 100%;
`;
