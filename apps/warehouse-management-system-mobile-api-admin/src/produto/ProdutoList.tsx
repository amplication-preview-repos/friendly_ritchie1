import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProdutoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Produtos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="codigoProduto" source="codigoProduto" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="localizacao" source="localizacao" />
        <TextField label="nomeProduto" source="nomeProduto" />
        <TextField label="quantidadeDisponivel" source="quantidadeDisponivel" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
