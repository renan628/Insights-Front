import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Input from '../../components/input';
import { Card, FooterContent, ViewMore } from './style';

function Create() {
  const StyledTextField = styled(TextField)<TextFieldProps>(() => ({
    label: {
      fontSize: 18,
      fontFamily: "'Exo 2'",
      fontWeight: 400,
      fontStyle: 'italic',
      color: '#000',
      marginLeft: -12,
    },
    '& .MuiInputBase-root': {
      backgroundColor: '#fff',
      padding: '28px 0px 0px',
    },
    '& .Mui-focused': {
      color: '#000',
    },
  }));

  return (
    <>
      <Card>
        <StyledTextField
          id="filled-multiline-static"
          label="INSIGHT"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
          fullWidth
        />
      </Card>
    </>
  );
}

export default Create;
