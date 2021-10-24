import React, { useState } from 'react';
import Name from './steps/name';
import Terms from './steps/terms';
import CEP from './steps/cep';
import AddressNumber from './steps/address_number';
import AddressConfirme from './steps/address_confirm';
import AddressComplement from './steps/address_complement';
import CellNumber from './steps/cell_number';
import Payment from './steps/payment';
import { Prefix, SubTitle, Title } from '../../theme/style';
import Finally from './steps/finally';

function Login() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step < 8 ? step + 1 : step);

  return (
    <>
      <Prefix>_</Prefix>
      <Title>contratação</Title>
      <SubTitle> pacote Prata</SubTitle>
      {step === 0 && <Name nextStep={nextStep} />}
      {step === 1 && <Terms nextStep={nextStep} />}
      {step === 2 && <CEP nextStep={nextStep} />}
      {step === 3 && <AddressConfirme nextStep={nextStep} />}
      {step === 4 && <AddressNumber nextStep={nextStep} />}
      {step === 5 && <AddressComplement nextStep={nextStep} />}
      {step === 6 && <CellNumber nextStep={nextStep} />}
      {step === 7 && <Payment nextStep={nextStep} />}
      {step === 8 && <Finally nextStep={nextStep} />}
    </>
  );
}

export default Login;
