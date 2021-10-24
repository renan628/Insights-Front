/* eslint-disable @typescript-eslint/naming-convention */
import React, { FC } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box, Input as InputMaterial } from '@mui/material';
import { defaultTheme } from '../../theme';
import { hexToRGB } from '../../utils/color';

interface inputParams {
  defaultValue?: string;
  placeholder?: string;
}

const CssTextField = styled(InputMaterial)({
  '& label': {
    color: defaultTheme.colors.primary.light,
    fontSize: 34,
  },
  '& .Mui-focused': {
    borderColor: 'white',
  },
  ':hover:not(.Mui-disabled):before': {
    borderBottom: `2px solid ${hexToRGB(
      defaultTheme.colors.primary.light,
      '0.5'
    )}`,
  },
  ':before': {
    borderBottom: `2px solid ${hexToRGB(
      defaultTheme.colors.secondary.light,
      '0.5'
    )}`,
  },
  '& .MuiInputBase-input': {
    '&::placeholder': {
      color: defaultTheme.colors.primary.light,
      // opacity: 1,
    },
    color: defaultTheme.colors.primary.light,
    fontSize: 34,
    height: '2.4375em',
    fontFamily: defaultTheme.fontFamily.primary,
  },
  ':after': {
    borderBottom: `2px solid ${defaultTheme.colors.primary.light}`,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: defaultTheme.colors.primary.light,
    },
    '&:hover fieldset': {
      borderColor: defaultTheme.colors.primary.light,
    },
    '&.Mui-focused fieldset': {
      borderColor: defaultTheme.colors.primary.light,
    },
  },
});

const Input: FC<inputParams> = ({ defaultValue, placeholder }) => (
  <Box
    component="form"
    sx={{
      '& > :not(style)': { width: '100%' },
    }}
    noValidate
    autoComplete="off"
  >
    <CssTextField
      defaultValue={defaultValue}
      placeholder={placeholder}
      // variant="standard"
    />
  </Box>
);

export default Input;
