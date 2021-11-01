import React from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import { Card, Content, LabelLimite } from './style';

function Create() {
  return (
    <>
      <Content>
        <Card>
          <Input
            type="multline"
            label="INSIGHT"
            placeholder="Escreva aqui o seu insight..."
            rows={4}
          />
          <LabelLimite>limite de caracteres: 400</LabelLimite>
          <div style={{ marginTop: 20 }}>
            <Input
              label="CATEGORIA"
              placeholder="Adicione uma categoria (opcional)"
            />
          </div>
        </Card>
      </Content>
      <Button label="PUBLICAR" />
    </>
  );
}

export default Create;
