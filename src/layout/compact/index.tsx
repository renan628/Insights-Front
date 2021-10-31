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
          <Flex align="center" style={{ cursor: 'pointer' }}>
            <ArrowBack onClick={() => history.goBack()} />
          </Flex>
          <div style={{ textAlign: 'center' }}>
            <Title style={{ fontWeight: 200 }}>CRIAR</Title>
            <Title style={{ marginTop: -6 }}>INSIGHT</Title>
          </div>
          <div style={{ width: 20 }} />
        </Flex>
      </Top>
      <Content>{component}</Content>
    </Background>
  );
};

export default System;
