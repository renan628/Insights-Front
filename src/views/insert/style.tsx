import styled from 'styled-components';
import { defaultTheme } from '../../theme';

export const Card = styled.div`
  background-color: ${defaultTheme.colors.primary.contrast};
  border-radius: 8px;
  text-align: center;
  width: 352px;
  padding: 16px;
  margin: 8px 0;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
`;

export const LabelLimite = styled.div`
  text-align: right;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  height: calc(100vh - 180px);
`;
