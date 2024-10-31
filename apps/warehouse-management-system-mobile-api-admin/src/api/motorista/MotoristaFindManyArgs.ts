import { MotoristaWhereInput } from "./MotoristaWhereInput";
import { MotoristaOrderByInput } from "./MotoristaOrderByInput";

export type MotoristaFindManyArgs = {
  where?: MotoristaWhereInput;
  orderBy?: Array<MotoristaOrderByInput>;
  skip?: number;
  take?: number;
};
