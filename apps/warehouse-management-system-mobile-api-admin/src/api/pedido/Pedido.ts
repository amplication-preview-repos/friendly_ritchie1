import { Produto } from "../produto/Produto";

export type Pedido = {
  createdAt: Date;
  dataPedido: Date | null;
  id: string;
  produto?: Produto | null;
  statusPedido?: "Option1" | null;
  tipoPedido?: "Option1" | null;
  updatedAt: Date;
};
