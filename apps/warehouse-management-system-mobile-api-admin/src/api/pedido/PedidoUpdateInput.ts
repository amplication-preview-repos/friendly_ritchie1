import { ProdutoWhereUniqueInput } from "../produto/ProdutoWhereUniqueInput";

export type PedidoUpdateInput = {
  dataPedido?: Date | null;
  produto?: ProdutoWhereUniqueInput | null;
  statusPedido?: "Option1" | null;
  tipoPedido?: "Option1" | null;
};
