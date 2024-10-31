import { SortOrder } from "../../util/SortOrder";

export type ProdutoOrderByInput = {
  codigoProduto?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  localizacao?: SortOrder;
  nomeProduto?: SortOrder;
  quantidadeDisponivel?: SortOrder;
  updatedAt?: SortOrder;
};
