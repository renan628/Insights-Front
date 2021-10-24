import React from 'react';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Header, Prefix, Title, SubTitle, Text } from '../../../theme/style';
import Input from '../../../components/input';
import Button from '../../../components/button';

interface toggleProps {
  nextStep: () => void | any;
}
function AddressNumber(props: toggleProps) {
  return (
    <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }}>
      <Header>Qual o número da residência?</Header>
      <Grid container spacing={8} style={{ marginTop: 0 }}>
        <Grid item xs={12} sm={12}>
          <Input placeholder="Número" />
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
        <Grid item xs={12} md={8} />
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            onClick={() => props.nextStep()}
            label="Continuar"
          />
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default AddressNumber;
