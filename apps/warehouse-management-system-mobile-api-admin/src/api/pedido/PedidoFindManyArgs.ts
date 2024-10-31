import { PedidoWhereInput } from "./PedidoWhereInput";
import { PedidoOrderByInput } from "./PedidoOrderByInput";

export type PedidoFindManyArgs = {
  where?: PedidoWhereInput;
  orderBy?: Array<PedidoOrderByInput>;
  skip?: number;
  take?: number;
};
