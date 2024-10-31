import { Produto as TProduto } from "../api/produto/Produto";

export const PRODUTO_TITLE_FIELD = "codigoProduto";

export const ProdutoTitle = (record: TProduto): string => {
  return record.codigoProduto?.toString() || String(record.id);
};
