import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { FC } from 'react';
import { defaultTheme } from '../../theme';
import { hexToRGB } from '../../utils/color';

interface inputParams {
  label: string;
  onClick?: () => void | any;
  width?: number;
  variant?: 'contained' | 'outlined' | undefined;
}

const CustomizedButtons: FC<inputParams> = ({
  width,
  variant,
  label,
  onClick,
}) => {
  const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: defaultTheme.colors.primary.contrast,
    backgroundColor: hexToRGB(
      defaultTheme.colors.primary.light,
      variant === 'outlined' ? '0.0' : '1'
    ),
    borderRadius: 64,
    padding: '6px 15px',
    fontSize: 15,
    width: width || '100%',
    fontFamily: defaultTheme.fontFamily.components,
    '@media screen and (max-width: 640px)': {
      height: 44,
    },
    '@media screen and (min-width: 640px)': {
      height: 64,
    },
    '&:hover': {
      backgroundColor: hexToRGB(
        defaultTheme.colors.primary.light,
        variant === 'outlined' ? '0.0' : '0.95'
      ),
    },
  }));

  return (
    <Stack spacing={2} direction="row">
      <ColorButton
        onClick={() => {
          if (typeof onClick === 'function') onClick();
        }}
        variant={variant}
      >
        {label}
      </ColorButton>
    </Stack>
  );
};

export default CustomizedButtons;
