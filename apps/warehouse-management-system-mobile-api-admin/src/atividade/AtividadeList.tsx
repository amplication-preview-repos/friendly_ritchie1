import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AtividadeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Atividades"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataInicio" source="dataInicio" />
        <TextField label="dataTermino" source="dataTermino" />
        <TextField label="descricaoAtividade" source="descricaoAtividade" />
        <TextField label="ID" source="id" />
        <TextField label="statusAtividade" source="statusAtividade" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
