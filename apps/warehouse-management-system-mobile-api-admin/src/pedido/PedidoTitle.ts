import { Pedido as TPedido } from "../api/pedido/Pedido";

export const PEDIDO_TITLE_FIELD = "id";

export const PedidoTitle = (record: TPedido): string => {
  return record.id?.toString() || String(record.id);
};
