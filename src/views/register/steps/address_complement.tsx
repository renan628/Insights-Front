import React from 'react';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Header, Prefix, Title, SubTitle, Text } from '../../../theme/style';
import Input from '../../../components/input';
import Button from '../../../components/button';

interface toggleProps {
  nextStep: () => void | any;
}
function AddressComplement(props: toggleProps) {
  return (
    <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }}>
      <Header>Possui algum complemento? Ex: Apartamento, sala, bloco...</Header>
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
          <Button
            onClick={() => props.nextStep()}
            variant="contained"
            label="Não"
          />
        </Grid>
        <Grid item xs={8} md={2}>
          <Button variant="contained" label="Sim" />
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default AddressComplement;
