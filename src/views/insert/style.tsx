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

export const Top = styled.div`
  padding: 15px 10vw;
`;

export const ViewMore = styled.div`
  text-align: center;
  font-size: 38px;
  font-family: 'Roboto';
  letter-spacing: -3px;
  opacity: 0.16;
`;

export const FooterContent = styled.div`
  text-align: center;
  font-size: 14px;
  color: ${defaultTheme.colors.primary.light};
  margin-bottom: 58px;
`;
