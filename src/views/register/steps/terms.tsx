import React from 'react';
import { motion } from 'framer-motion';
import {
  Header,
  Prefix,
  Title,
  SubTitle,
  Text,
  Flex,
} from '../../../theme/style';
import Checkbox from '../../../components/checkbox';
import Button from '../../../components/button';

interface toggleProps {
  nextStep: () => void | any;
}

function Terms(props: toggleProps) {
  const terms =
    '      se a operação de tratamento é realizada no território nacional;\n' +
    '      se a atividade de tratamento tem por objetivo a oferta de produtos ou serviços ou o tratamento de dados de indivíduos localizados no território nacional;\n' +
    '      se os dados pessoais são coletados no território nacional.\n' +
    '      Pela lei, dado pessoal é qualquer informação relacionada a pessoa identificada ou identificável.\n' +
    '\n' +
    '      A expressão "tratamento de dados pessoais" abrange praticamente tudo aquilo que se pode fazer com estes dados, como as atividades de coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.';

  return (
    <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }}>
      <Header>
        Dante, veja como iremos tratar e manter seus dados com total segurança.
        Aceite o termo de uso para continuar.
      </Header>
      <Text>
        <p>
          A política de privacidade (ou declaração de política de privacidade) é
          o documento por meio do qual a pessoa física ou jurídica que mantém um
          site ou aplicativo expõe e explica a todos os interessados a forma
          como os dados pessoais dos usuários da plataforma serão tratados.
        </p>
        <p>
          O assunto é regulamentado, no Brasil, principalmente pela Lei Geral de
          Proteção de Dados Pessoais (LGPD), lei que estabeleceu uma série de
          exigências àqueles que realizam operações de tratamento de dados
          pessoais. A lei se aplica:
        </p>
        <p>
          se a operação de tratamento é realizada no território nacional;
          <br />
          se a atividade de tratamento tem por objetivo a oferta de produtos ou
          serviços ou o tratamento de dados de indivíduos localizados no
          território nacional;
          <br />
          se os dados pessoais são coletados no território nacional.
          <br />
          Pela lei, dado pessoal é qualquer informação relacionada a pessoa
          identificada ou identificável.
          <br />
        </p>
        <p>
          A expressão &quot;tratamento de dados pessoais&quot; abrange
          praticamente tudo aquilo que se pode fazer com estes dados, como as
          atividades de coleta, produção, recepção, classificação, utilização,
          acesso, reprodução, transmissão, distribuição, processamento,
          arquivamento, armazenamento, eliminação, avaliação ou controle da
          informação, modificação, comunicação, transferência, difusão ou
          extração.
        </p>
      </Text>
      <Checkbox defaultChecked label="Eu lí e aceito os termos acima." />
      <Flex justify="right">
        <Button
          variant="contained"
          width={282}
          onClick={() => props.nextStep()}
          label="Continuar"
        />
      </Flex>
    </motion.div>
  );
}

export default Terms;
