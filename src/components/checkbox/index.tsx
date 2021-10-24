import * as React from 'react';
import { FC } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { defaultTheme } from '../../theme';

interface inputParams {
  label: string;
  defaultChecked?: boolean;
}

const CustomizedCheckbox: FC<inputParams> = ({ label, defaultChecked }) => {
  return (
    <FormGroup style={{ flexDirection: 'row' }}>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked={defaultChecked}
            sx={{
              color: defaultTheme.colors.primary.light,
              '&.Mui-checked': {
                color: defaultTheme.colors.primary.light,
              },
            }}
          />
        }
        label={label}
        style={{ color: defaultTheme.colors.primary.contrast }}
      />
    </FormGroup>
  );
};

export default CustomizedCheckbox;
