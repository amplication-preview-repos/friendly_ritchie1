import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProdutoTitle } from "../produto/ProdutoTitle";

export const PedidoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dataPedido" source="dataPedido" />
        <ReferenceInput source="produto.id" reference="Produto" label="Produto">
          <SelectInput optionText={ProdutoTitle} />
        </ReferenceInput>
        <SelectInput
          source="statusPedido"
          label="statusPedido"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="tipoPedido"
          label="tipoPedido"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
