import React from 'react';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Header, Prefix, Title, SubTitle } from '../../../theme/style';
import Input from '../../../components/input';
import Button from '../../../components/button';
import { TextLabel } from '../style';

interface toggleProps {
  nextStep: () => void | any;
}
function Payment(props: toggleProps) {
  return (
    <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }}>
      <Header>Informe os dados do cartão</Header>
      <Grid container spacing={8} style={{ marginTop: 0 }}>
        <Grid item xs={12} sm={12}>
          <Input placeholder="Nome escrito no cartão" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Input placeholder="Número do cartão" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input placeholder="Vencimento DD/MM" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input placeholder="Código CVV" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input placeholder="CPF" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input placeholder="Débito ou Crédito?" />
        </Grid>
      </Grid>
      <Grid
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        container
        spacing={1}
        style={{ marginTop: 25 }}
      >
        <Grid item xs={6} md={6}>
          <TextLabel>Valor mensal a pagar:</TextLabel>
        </Grid>
        <Grid item xs={6} md={6}>
          <div
            style={{ float: 'right', display: 'flex', flexDirection: 'row' }}
          >
            <TextLabel style={{ textAlign: 'center', marginRight: 20 }}>
              R$ 29,90
            </TextLabel>
            <Button
              width={282}
              variant="contained"
              onClick={() => props.nextStep()}
              label="Assinar Pacote"
            />
          </div>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default Payment;
