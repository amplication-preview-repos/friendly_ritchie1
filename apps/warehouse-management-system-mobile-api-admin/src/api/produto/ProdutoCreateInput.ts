import { PedidoCreateNestedManyWithoutProdutosInput } from "./PedidoCreateNestedManyWithoutProdutosInput";

export type ProdutoCreateInput = {
  codigoProduto?: string | null;
  localizacao?: string | null;
  nomeProduto?: string | null;
  pedidos?: PedidoCreateNestedManyWithoutProdutosInput;
  quantidadeDisponivel?: number | null;
};
