import React from 'react';
import Input from '../../components/input';
import { Card, FooterContent, ViewMore, Tag } from './style';
import { Flex } from '../../theme/style';
import { useInsightContext } from '../../api/contexts/insights';
import { Insigths } from '../../api/contexts/types';

function Feed() {
  const { insights, getInsights } = useInsightContext();
  // {insights &&
  // insights.map((insight: Insigths) => <Card>{insight.texto}</Card>)}
  return (
    <>
      {insights &&
        insights.map((insight: Insigths) => (
          <Card>
            {insight.texto}
            <Flex align="center" justify="center">
              {insight.tags &&
                insight.tags.map((tags) => <Tag>{tags.nome}</Tag>)}
            </Flex>
          </Card>
        ))}
      <ViewMore onClick={getInsights}>...</ViewMore>
      <FooterContent>Toque para exibir mais insights</FooterContent>
      <Input placeholder="Pesquise por termos ou categorias..." type="search" />
    </>
  );
}

export default Feed;
