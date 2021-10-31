import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Background, Title, Top, Content } from './style';
import { Flex } from '../../theme/style';

interface PageParams {
  component: React.ReactElement;
}

const System = ({ component }: PageParams) => {
  const history = useHistory();
  return (
    <Background>
      <Top>
        <Flex justify="space-between">
          <Flex align="center">
            <ArrowBack onClick={() => history.goBack()} />
          </Flex>
          <div style={{ textAlign: 'center' }}>
            <Title>Criar</Title>
            <Title>Insight</Title>
          </div>
          <div style={{ width: 20 }} />
        </Flex>
      </Top>
      <Content>{component}</Content>
    </Background>
  );
};

export default System;
