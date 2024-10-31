import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dataEvento" source="dataEvento" />
        <TextInput label="descricaoEvento" multiline source="descricaoEvento" />
        <TextInput label="localEvento" source="localEvento" />
        <TextInput label="tituloEvento" source="tituloEvento" />
      </SimpleForm>
    </Create>
  );
};
