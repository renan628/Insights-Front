import styled from 'styled-components';
import { defaultTheme } from '../../theme';

export const TextLabel = styled.div`
  font-size: 34px;
  font-family: ${defaultTheme.fontFamily.primary};
  color: ${defaultTheme.colors.primary.contrast};
  font-weight: bold;
  margin-top: 16px;
`;

export const ContentSmall = styled.div`
  max-width: 810px;
`;

export const Separator = styled.div`
  height: 100%;
  border-bottom: 1px solid ${defaultTheme.colors.secondary.light};
`;

export const TextPrimary = styled.div`
  color: ${defaultTheme.colors.primary.main};
  font-size: ${defaultTheme.font.h6.size};
`;
