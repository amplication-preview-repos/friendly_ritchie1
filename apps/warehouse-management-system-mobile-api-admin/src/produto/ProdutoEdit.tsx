import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { PedidoTitle } from "../pedido/PedidoTitle";

export const ProdutoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="codigoProduto" source="codigoProduto" />
        <TextInput label="localizacao" source="localizacao" />
        <TextInput label="nomeProduto" source="nomeProduto" />
        <ReferenceArrayInput source="pedidos" reference="Pedido">
          <SelectArrayInput
            optionText={PedidoTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="quantidadeDisponivel"
          source="quantidadeDisponivel"
        />
      </SimpleForm>
    </Edit>
  );
};
