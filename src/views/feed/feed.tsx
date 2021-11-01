import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '../../components/input';
import { Card, FooterContent, ViewMore, Tag } from './style';
import { Flex } from '../../theme/style';
import { useInsightContext } from '../../api/contexts/insights';
import { Insigths } from '../../api/contexts/types';

function Feed() {
  const [search, setsearch] = useState<string>();
  const { insights, getInsights, setInsights, searchInsights } =
    useInsightContext();

  const onSearch = async () => {
    await searchInsights(search);
  };

  return (
    <>
      {insights &&
        insights.map((insight: Insigths, key: number) => (
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            exit={{ y: -1000 }}
            transition={{ delay: key / 8, type: 'just' }}
          >
            <Card>
              {insight.texto}
              <Flex align="center" justify="center">
                {insight.tags &&
                  insight.tags.map((tags) => <Tag>{tags.nome}</Tag>)}
              </Flex>
            </Card>
          </motion.div>
        ))}
      <ViewMore onClick={getInsights} style={{ cursor: 'pointer' }}>
        ...
      </ViewMore>
      <FooterContent onClick={getInsights} style={{ cursor: 'pointer' }}>
        Toque para exibir mais insights
      </FooterContent>
      <Input
        placeholder="Pesquise por termos ou categorias..."
        type="search"
        onChange={setsearch}
        onEnterPress={() => onSearch()}
        onClick={() => onSearch()}
      />
    </>
  );
}

export default Feed;
