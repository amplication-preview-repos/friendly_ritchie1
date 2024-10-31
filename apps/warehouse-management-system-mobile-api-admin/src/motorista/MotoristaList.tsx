import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MotoristaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Motoristas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="nomeMotorista" source="nomeMotorista" />
        <TextField label="numeroRegistro" source="numeroRegistro" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="veiculo" source="veiculo" />{" "}
      </Datagrid>
    </List>
  );
};
