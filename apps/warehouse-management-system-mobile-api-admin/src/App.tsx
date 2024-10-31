import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PedidoList } from "./pedido/PedidoList";
import { PedidoCreate } from "./pedido/PedidoCreate";
import { PedidoEdit } from "./pedido/PedidoEdit";
import { PedidoShow } from "./pedido/PedidoShow";
import { ProdutoList } from "./produto/ProdutoList";
import { ProdutoCreate } from "./produto/ProdutoCreate";
import { ProdutoEdit } from "./produto/ProdutoEdit";
import { ProdutoShow } from "./produto/ProdutoShow";
import { MotoristaList } from "./motorista/MotoristaList";
import { MotoristaCreate } from "./motorista/MotoristaCreate";
import { MotoristaEdit } from "./motorista/MotoristaEdit";
import { MotoristaShow } from "./motorista/MotoristaShow";
import { EventoList } from "./evento/EventoList";
import { EventoCreate } from "./evento/EventoCreate";
import { EventoEdit } from "./evento/EventoEdit";
import { EventoShow } from "./evento/EventoShow";
import { AtividadeList } from "./atividade/AtividadeList";
import { AtividadeCreate } from "./atividade/AtividadeCreate";
import { AtividadeEdit } from "./atividade/AtividadeEdit";
import { AtividadeShow } from "./atividade/AtividadeShow";
import { IncidenteList } from "./incidente/IncidenteList";
import { IncidenteCreate } from "./incidente/IncidenteCreate";
import { IncidenteEdit } from "./incidente/IncidenteEdit";
import { IncidenteShow } from "./incidente/IncidenteShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Warehouse Management System Mobile API"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Pedido"
          list={PedidoList}
          edit={PedidoEdit}
          create={PedidoCreate}
          show={PedidoShow}
        />
        <Resource
          name="Produto"
          list={ProdutoList}
          edit={ProdutoEdit}
          create={ProdutoCreate}
          show={ProdutoShow}
        />
        <Resource
          name="Motorista"
          list={MotoristaList}
          edit={MotoristaEdit}
          create={MotoristaCreate}
          show={MotoristaShow}
        />
        <Resource
          name="Evento"
          list={EventoList}
          edit={EventoEdit}
          create={EventoCreate}
          show={EventoShow}
        />
        <Resource
          name="Atividade"
          list={AtividadeList}
          edit={AtividadeEdit}
          create={AtividadeCreate}
          show={AtividadeShow}
        />
        <Resource
          name="Incidente"
          list={IncidenteList}
          edit={IncidenteEdit}
          create={IncidenteCreate}
          show={IncidenteShow}
        />
      </Admin>
    </div>
  );
};

export default App;
