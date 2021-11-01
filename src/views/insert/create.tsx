import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button';
import Input from '../../components/input';
import { Card, Content, LabelLimite } from './style';
import { useInsightContext } from '../../api/contexts/insights';

function Create() {
  const [insight, setInsight] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const { postInsights } = useInsightContext();
  const history = useHistory();
  const submit = async () => {
    setLoading(true);
    await postInsights(insight, category).catch((error: any) => {
      setLoading(false);
      console.log(error);
    });
    history.push('/');
    setLoading(false);
  };

  return (
    <>
      <Content>
        <Card>
          <Input
            type="multline"
            label="INSIGHT"
            dataTestid="new_insight_input"
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
              dataTestid="new_tag_input"
            />
          </div>
        </Card>
      </Content>
      <div>
        <Button
          loading={loading}
          label="PUBLICAR"
          onClick={submit}
          disabled={loading}
          dataTestid="buttonInsertInsight"
        />
      </div>
    </>
  );
}

export default Create;
