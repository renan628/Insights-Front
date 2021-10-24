import React from 'react';
import { Grid } from '@mui/material';
import { Header, Prefix, Title } from '../../theme/style';
import Input from '../../components/input';
import Button from '../../components/button';

function Login() {
  return (
    <>
      <Prefix>_</Prefix>
      <Title>entrar</Title>
      <Header>Bem vindo!</Header>
      <Grid container spacing={8} style={{ marginTop: 0 }}>
        <Grid item xs={12} sm={6}>
          <Input placeholder="E-mail" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input placeholder="Senha" />
        </Grid>
      </Grid>
      <Grid
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        container
        spacing={1}
        style={{ marginTop: 25 }}
      >
        <Grid item xs={12} md={7} />
        <Grid item xs={8} md={3}>
          <Button variant="outlined" label="Esqueci minha senha" />
        </Grid>
        <Grid item xs={4} md={2}>
          <Button variant="contained" label="Entrar" />
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
