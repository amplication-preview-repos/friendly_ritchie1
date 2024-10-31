import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const AtividadeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataInicio" source="dataInicio" />
        <TextField label="dataTermino" source="dataTermino" />
        <TextField label="descricaoAtividade" source="descricaoAtividade" />
        <TextField label="ID" source="id" />
        <TextField label="statusAtividade" source="statusAtividade" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
