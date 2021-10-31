import React from 'react';
import Icon from '@mui/material/Icon';
import {
  Background,
  Title,
  Top,
  Content,
  TopLogo,
  Avatar,
  Email,
  TopLabel,
  Line,
} from './style';
import { Flex } from '../../theme/style';

interface PageParams {
  component: React.ReactElement;
}

const logo = require('../../assets/images/brand-insights@3x.svg');
const avatar = require('../../assets/images/avatar.png');

const System = ({ component }: PageParams) => {
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
          <TopLabel>
            Olá, Antonio!
            <Email>antonio.pina@g.globo</Email>
          </TopLabel>
          <Line />
          <Title>Feed de Insights</Title>
        </Flex>
      </Top>
      <Content>{component}</Content>
    </Background>
  );
};

export default System;
