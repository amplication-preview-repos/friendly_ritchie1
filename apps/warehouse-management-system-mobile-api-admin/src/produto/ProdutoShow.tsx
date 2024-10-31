import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUTO_TITLE_FIELD } from "./ProdutoTitle";

export const ProdutoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="codigoProduto" source="codigoProduto" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="localizacao" source="localizacao" />
        <TextField label="nomeProduto" source="nomeProduto" />
        <TextField label="quantidadeDisponivel" source="quantidadeDisponivel" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Pedido"
          target="produtoId"
          label="Pedidos"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dataPedido" source="dataPedido" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Produto"
              source="produto.id"
              reference="Produto"
            >
              <TextField source={PRODUTO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="statusPedido" source="statusPedido" />
            <TextField label="tipoPedido" source="tipoPedido" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
