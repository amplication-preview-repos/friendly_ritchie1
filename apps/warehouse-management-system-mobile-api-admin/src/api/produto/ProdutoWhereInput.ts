import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PedidoListRelationFilter } from "../pedido/PedidoListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProdutoWhereInput = {
  codigoProduto?: StringNullableFilter;
  id?: StringFilter;
  localizacao?: StringNullableFilter;
  nomeProduto?: StringNullableFilter;
  pedidos?: PedidoListRelationFilter;
  quantidadeDisponivel?: IntNullableFilter;
};
