import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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

const logo = require('../../assets/images/brand-insights.svg');
const avatar = require('../../assets/images/avatar.png');

const System = ({ component }: PageParams) => {
  const history = useHistory();
  const redirectToAdd = () => {
    history.push('/new');
  };

  return (
    <Background>
      <Top>
        <TopLogo>
          <Flex
            justify="space-between"
            align="center"
            style={{ width: '100%' }}
          >
            <img src={logo.default} style={{ width: 50 }} alt="logo" />
            <Avatar avatar={avatar.default} />
            <div style={{ width: 50, textAlign: 'right', cursor: 'pointer' }}>
              <Icon data-testid="insertButton" onClick={() => redirectToAdd()}>
                add
              </Icon>
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
