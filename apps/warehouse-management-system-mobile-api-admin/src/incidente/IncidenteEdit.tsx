import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const IncidenteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dataOcorrencia" source="dataOcorrencia" />
        <TextInput
          label="descricaoIncidente"
          multiline
          source="descricaoIncidente"
        />
        <div />
      </SimpleForm>
    </Edit>
  );
};
