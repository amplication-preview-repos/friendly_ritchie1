import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUTO_TITLE_FIELD } from "../produto/ProdutoTitle";

export const PedidoList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Pedidos"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataPedido" source="dataPedido" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Produto" source="produto.id" reference="Produto">
          <TextField source={PRODUTO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="statusPedido" source="statusPedido" />
        <TextField label="tipoPedido" source="tipoPedido" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
