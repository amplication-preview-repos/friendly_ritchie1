import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MotoristaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="nomeMotorista" source="nomeMotorista" />
        <TextInput label="numeroRegistro" source="numeroRegistro" />
        <TextInput label="veiculo" source="veiculo" />
      </SimpleForm>
    </Create>
  );
};
