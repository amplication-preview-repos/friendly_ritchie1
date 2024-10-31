import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const AtividadeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dataInicio" source="dataInicio" />
        <DateTimeInput label="dataTermino" source="dataTermino" />
        <TextInput
          label="descricaoAtividade"
          multiline
          source="descricaoAtividade"
        />
        <SelectInput
          source="statusAtividade"
          label="statusAtividade"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
