import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dataEvento" source="dataEvento" />
        <TextInput label="descricaoEvento" multiline source="descricaoEvento" />
        <TextInput label="localEvento" source="localEvento" />
        <TextInput label="tituloEvento" source="tituloEvento" />
      </SimpleForm>
    </Edit>
  );
};
