import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import { defaultTheme } from '../../theme/index';
import {
  Background,
  ButtonFooter,
  Footer,
  LinkFooter,
  TitleFooter,
  Top,
  Content,
  TopLogo,
  Avatar,
  Name,
} from './style';
import { Flex } from '../../theme/style';

interface PageParams {
  component: React.ReactElement;
}

const logo = require('../../assets/images/brand-insights@3x.svg');
const avatar = require('../../assets/images/avatar.png');

const System = ({ component }: PageParams) => {
  const history = useHistory();
  return (
    <Background>
      <Top>
        <TopLogo>
          <Flex justify="space-between" align="center">
            <img src={logo.default} style={{ width: 50 }} alt="logo" />
            <Avatar avatar={avatar.default} />
            <div style={{ width: 50, textAlign: 'right' }}>
              <Icon>add</Icon>
            </div>
          </Flex>
        </TopLogo>
        <Flex justify="space-between" align="center" direction="column">
          <Name>Olá, Antonio!</Name>
        </Flex>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        {/* <img */}
        {/*  src={arrowBack.default} */}
        {/*  style={{ height: 24, marginTop: 5, cursor: 'pointer' }} */}
        {/*  alt="logo" */}
        {/*  onClick={() => history.goBack()} */}
        {/* /> */}
        {/* <Link to="/"> */}
        {/*  <img */}
        {/*    src={logo.default} */}
        {/*    style={{ height: 40, float: 'right', cursor: 'pointer' }} */}
        {/*    alt="logo" */}
        {/*  /> */}
        {/* </Link> */}
      </Top>
      <Content>{component}</Content>
      <Footer>
        <div>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item xs={12} sm={4} md={4} style={{ marginBottom: 15 }} />
            <Grid item xs={6} sm={2} md={2}>
              <TitleFooter style={{ marginBottom: 31 }}> Empresas </TitleFooter>
              <LinkFooter style={{ marginBottom: 26 }}> Sobre </LinkFooter>
              <LinkFooter style={{ marginBottom: 26 }}> Carreira </LinkFooter>
              <LinkFooter style={{ marginBottom: 26 }}> Contato </LinkFooter>
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <TitleFooter style={{ marginBottom: 31 }}>
                {' '}
                Transparência{' '}
              </TitleFooter>
              <LinkFooter style={{ marginBottom: 26 }}>
                Política de privacidade
              </LinkFooter>
              <LinkFooter style={{ marginBottom: 26 }}>
                Termos de uso
              </LinkFooter>
              <LinkFooter style={{ marginBottom: 26 }}>
                Condições Gerais
              </LinkFooter>
            </Grid>
            <Grid item xs={6} sm={4} md={4} />
          </Grid>
        </div>
      </Footer>
    </Background>
  );
};

export default System;
