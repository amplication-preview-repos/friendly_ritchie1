import { ProdutoWhereUniqueInput } from "../produto/ProdutoWhereUniqueInput";

export type PedidoCreateInput = {
  dataPedido?: Date | null;
  produto?: ProdutoWhereUniqueInput | null;
  statusPedido?: "Option1" | null;
  tipoPedido?: "Option1" | null;
};
