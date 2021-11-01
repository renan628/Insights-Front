import React, { useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import { Card, Content, LabelLimite } from './style';

function Create() {
  const [insight, setInsight] = useState<string>();
  const [category, setCategory] = useState<string>();

  return (
    <>
      <Content>
        <Card>
          <Input
            type="multline"
            label="INSIGHT"
            placeholder="Escreva aqui o seu insight..."
            rows={4}
            onChange={setInsight}
          />
          <LabelLimite>limite de caracteres: 400</LabelLimite>
          <div style={{ marginTop: 20 }}>
            <Input
              label="CATEGORIA"
              placeholder="Adicione uma categoria (opcional)"
              onChange={setCategory}
            />
          </div>
        </Card>
      </Content>
      <div>
        <Button label="PUBLICAR" />
      </div>
    </>
  );
}

export default Create;
