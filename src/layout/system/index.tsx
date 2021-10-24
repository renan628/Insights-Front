import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import {
  Background,
  ButtonFooter,
  Footer,
  LinkFooter,
  TitleFooter,
  Top,
  Content,
} from './style';

const arrowBack = require('../../assets/images/arrowBack.png');
const logo = require('../../assets/images/pravocesaude.png');
const face = require('../../assets/images/brandico_facebook.png');
const insta = require('../../assets/images/brandico_instagram.png');
const you = require('../../assets/images/brandico_youtube.png');

interface PageParams {
  component: React.ReactElement;
}

const System = ({ component }: PageParams) => {
  const history = useHistory();
  return (
    <Background>
      <Top>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <img
          src={arrowBack.default}
          style={{ height: 24, marginTop: 5, cursor: 'pointer' }}
          alt="logo"
          onClick={() => history.goBack()}
        />
        <Link to="/">
          <img
            src={logo.default}
            style={{ height: 40, float: 'right', cursor: 'pointer' }}
            alt="logo"
          />
        </Link>
      </Top>
      <Content>{component}</Content>
      <Footer>
        <div>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item xs={12} sm={4} md={4} style={{ marginBottom: 15 }}>
              <Link to="/">
                <img
                  src={logo.default}
                  style={{ height: 40, float: 'left', cursor: 'pointer' }}
                  alt="logo"
                />
              </Link>
            </Grid>
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
            <Grid item xs={6} sm={4} md={4}>
              <ButtonFooter>
                <img
                  src={face.default}
                  style={{
                    height: 32,
                    cursor: 'pointer',
                  }}
                  alt="logo"
                />
                <img
                  src={insta.default}
                  style={{
                    height: 32,
                    cursor: 'pointer',
                    marginLeft: 16,
                  }}
                  alt="logo"
                />
                <img
                  src={you.default}
                  style={{
                    height: 32,
                    cursor: 'pointer',
                    marginLeft: 16,
                  }}
                  alt="logo"
                />
              </ButtonFooter>
            </Grid>
          </Grid>
        </div>
      </Footer>
    </Background>
  );
};

export default System;
