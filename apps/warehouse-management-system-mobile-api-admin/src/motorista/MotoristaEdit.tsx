import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MotoristaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="nomeMotorista" source="nomeMotorista" />
        <TextInput label="numeroRegistro" source="numeroRegistro" />
        <TextInput label="veiculo" source="veiculo" />
      </SimpleForm>
    </Edit>
  );
};
