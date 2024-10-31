import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProdutoWhereUniqueInput } from "../produto/ProdutoWhereUniqueInput";

export type PedidoWhereInput = {
  dataPedido?: DateTimeNullableFilter;
  id?: StringFilter;
  produto?: ProdutoWhereUniqueInput;
  statusPedido?: "Option1";
  tipoPedido?: "Option1";
};
