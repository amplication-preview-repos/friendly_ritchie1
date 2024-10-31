import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EventoList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Eventos"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataEvento" source="dataEvento" />
        <TextField label="descricaoEvento" source="descricaoEvento" />
        <TextField label="ID" source="id" />
        <TextField label="localEvento" source="localEvento" />
        <TextField label="tituloEvento" source="tituloEvento" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
