import { PedidoUpdateManyWithoutProdutosInput } from "./PedidoUpdateManyWithoutProdutosInput";

export type ProdutoUpdateInput = {
  codigoProduto?: string | null;
  localizacao?: string | null;
  nomeProduto?: string | null;
  pedidos?: PedidoUpdateManyWithoutProdutosInput;
  quantidadeDisponivel?: number | null;
};
