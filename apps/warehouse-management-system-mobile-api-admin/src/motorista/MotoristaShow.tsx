import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const MotoristaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="nomeMotorista" source="nomeMotorista" />
        <TextField label="numeroRegistro" source="numeroRegistro" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="veiculo" source="veiculo" />
      </SimpleShowLayout>
    </Show>
  );
};
