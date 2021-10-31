import React from 'react';
import Input from '../../components/input';
import { Card, FooterContent, ViewMore } from './style';

function Feed() {
  return (
    <>
      <Card>
        Flamengo consegue boa vitória fora de casa na estréia da Copa
        Libertadores 2021
      </Card>
      <Card>
        Primeira partida de um grupo difícil exigiu que o time carioca virasse o
        placar em dois momentos do jogo
      </Card>
      <Card>
        O Flamengo não conseguia vencer um time na Argentina há mais de 40 anos
      </Card>
      <Card>
        Arrascaeta fez a diferença e garantiu a vitória para o time rubro-negro
      </Card>
      <ViewMore>...</ViewMore>
      <FooterContent>Toque para exibir mais insights</FooterContent>
      <Input placeholder="Pesquise por termos ou categorias..." />
    </>
  );
}

export default Feed;
