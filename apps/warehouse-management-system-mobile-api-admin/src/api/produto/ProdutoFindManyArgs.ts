import { ProdutoWhereInput } from "./ProdutoWhereInput";
import { ProdutoOrderByInput } from "./ProdutoOrderByInput";

export type ProdutoFindManyArgs = {
  where?: ProdutoWhereInput;
  orderBy?: Array<ProdutoOrderByInput>;
  skip?: number;
  take?: number;
};
