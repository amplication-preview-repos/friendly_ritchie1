import { SortOrder } from "../../util/SortOrder";

export type PedidoOrderByInput = {
  createdAt?: SortOrder;
  dataPedido?: SortOrder;
  id?: SortOrder;
  produtoId?: SortOrder;
  statusPedido?: SortOrder;
  tipoPedido?: SortOrder;
  updatedAt?: SortOrder;
};
