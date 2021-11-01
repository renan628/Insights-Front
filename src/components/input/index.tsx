import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import defaultTheme from '../../theme';

interface inputParams {
  onChange?: (arg1: string) => void;
  defaultValue?: string;
  placeholder?: string;
  type?: 'search' | string;
  rows?: number;
  label?: string;
  onKeyPress?: (arg1: React.KeyboardEvent<HTMLDialogElement>) => void;
  onEnterPress?: () => void;
  onClick?: () => void;
  dataTestid?: string;
}

const StyledTextField = styled(TextField)<TextFieldProps>(() => ({
  label: {
    fontSize: 18,
    fontFamily: "'Exo 2'",
    fontWeight: 400,
    fontStyle: 'italic',
    color: '#000',
    marginLeft: -12,
  },
  '& .MuiFilledInput-input': {
    paddingBottom: 20,
    paddingTop: 2,
  },
  '& .MuiInputBase-root': {
    backgroundColor: '#fff',
    padding: '28px 0px 0px',
  },
  '& label.Mui-focused': {
    color: '#000',
  },
  '& .MuiInputBase-root.Mui-focused': {
    backgroundColor: '#fff',
  },
  '& .MuiFilledInput-root:hover': {
    backgroundColor: '#fff',
  },
  '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
    borderBottom: `1px solid ${defaultTheme.colors.primary.main}`,
  },
  '&  .MuiFilledInput-root:before': {
    borderBottom: `2px solid rgba(0, 0, 0, 0.08)`,
  },
  '&  .MuiFilledInput-root:after': {
    borderBottom: `2px solid rgba(0, 0, 0, 0.08)`,
  },
}));

const Input: React.FC<inputParams> = ({
  defaultValue,
  placeholder,
  type,
  rows,
  label,
  onChange,
  onKeyPress,
  onEnterPress,
  dataTestid,
  onClick,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Enter') {
      if (typeof onEnterPress === 'function') {
        onEnterPress();
      }
    }

    if (typeof onKeyPress === 'function') {
      onKeyPress(e);
    }
  };

  if (type === 'search') {
    return (
      <Paper
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          m: '15px 0 0 0',
        }}
        style={{ boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.08)' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder || ''}
          defaultValue={defaultValue || ''}
          onChange={(e) =>
            typeof onChange === 'function' && onChange(e.target.value)
          }
          onKeyPress={(e) => {
            if (typeof onEnterPress === 'function') handleKeyPress(e);
          }}
          inputProps={{
            'data-testid': dataTestid || '',
          }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon
            onClick={() => {
              if (typeof onClick === 'function') onClick();
            }}
            style={{ color: 'rgba(102, 102, 102, 0.4' }}
          />
        </IconButton>
      </Paper>
    );
  }

  return (
    <StyledTextField
      inputProps={{
        'data-testid': dataTestid || '',
      }}
      placeholder={placeholder || ''}
      id="filled-multiline-static"
      label={label || ''}
      multiline
      onChange={(e) =>
        typeof onChange === 'function' && onChange(e.target.value)
      }
      onKeyPress={(e) => {
        if (typeof onKeyPress === 'function') onKeyPress(e);
      }}
      rows={rows || 1}
      variant="filled"
      fullWidth
      focused
    />
  );
};

export default Input;
