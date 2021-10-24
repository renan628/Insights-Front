import React from 'react';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Header, Prefix, Title, SubTitle, Text } from '../../../theme/style';
import Input from '../../../components/input';
import Button from '../../../components/button';

interface toggleProps {
  nextStep: () => void | any;
}
function AddressConfirme(props: toggleProps) {
  return (
    <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }}>
      <Header>Confirme se o endereço está correto</Header>
      <Text>Rua São Paulo, Centro, Belo Horizonte, MG.</Text>
      <Grid
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        container
        spacing={1}
        style={{ marginTop: 25 }}
      >
        <Grid item xs={12} md={8} />
        <Grid item xs={8} md={2}>
          <Button variant="contained" label="Corrigir" />
        </Grid>
        <Grid item xs={8} md={2}>
          <Button
            variant="contained"
            onClick={() => props.nextStep()}
            label="Está Correto"
          />
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default AddressConfirme;
