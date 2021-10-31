import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface inputParams {
  defaultValue?: string;
  placeholder?: string;
}

const Input: React.FC<inputParams> = ({ defaultValue, placeholder }) => (
  <Paper
    component="form"
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
      inputProps={{ 'aria-label': 'search google maps' }}
      defaultValue={defaultValue || ''}
    />
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon style={{ color: 'rgba(102, 102, 102, 0.4' }} />
    </IconButton>
  </Paper>
);

export default Input;
