import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PRODUTO_TITLE_FIELD } from "../produto/ProdutoTitle";

export const PedidoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataPedido" source="dataPedido" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Produto" source="produto.id" reference="Produto">
          <TextField source={PRODUTO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="statusPedido" source="statusPedido" />
        <TextField label="tipoPedido" source="tipoPedido" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
