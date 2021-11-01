import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FC } from 'react';
import { CircularProgress } from '@mui/material';
import { defaultTheme } from '../../theme';

interface buttonParams {
  label: string;
  onClick?: () => void | any;
  width?: number;
  variant?: 'contained' | 'outlined' | undefined;
  disabled?: boolean;
  loading?: boolean;
  dataTestid?: string;
}

const CustomizedButtons: FC<buttonParams> = ({
  width,
  variant,
  label,
  onClick,
  disabled,
  loading,
  dataTestid,
}) => {
  const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: defaultTheme.colors.primary.contrast,
    backgroundColor: defaultTheme.colors.primary.main,
    borderRadius: 8,
    padding: '6px 15px',
    fontSize: 16,
    fontWeight: 600,
    fontStyle: 'italic',
    letterSpacing: 3,
    width: width || '100%',
    fontFamily: defaultTheme.fontFamily.primary,
    height: 56,
    '&.Mui-disabled	': {
      color: '#fff',
      backgroundColor: `rgba(${defaultTheme.rgba.main}, 0.4)`,
    },
    '&:hover': {
      backgroundColor: `rgba(${defaultTheme.rgba.main}, 0.8)`,
    },
  }));

  return (
    <Stack spacing={2} direction="row">
      <ColorButton
        onClick={() => {
          if (typeof onClick === 'function') onClick();
        }}
        disabled={disabled}
        variant={variant}
        data-testid={dataTestid || ''}
      >
        {loading ? (
          <>
            <CircularProgress
              size={30}
              style={{ color: '#fff', marginRight: 15 }}
            />{' '}
          </>
        ) : (
          label
        )}
      </ColorButton>
    </Stack>
  );
};

export default CustomizedButtons;
