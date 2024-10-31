import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const IncidenteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dataOcorrencia" source="dataOcorrencia" />
        <TextInput
          label="descricaoIncidente"
          multiline
          source="descricaoIncidente"
        />
        <div />
      </SimpleForm>
    </Create>
  );
};
