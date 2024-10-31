import { AtividadeWhereInput } from "./AtividadeWhereInput";
import { AtividadeOrderByInput } from "./AtividadeOrderByInput";

export type AtividadeFindManyArgs = {
  where?: AtividadeWhereInput;
  orderBy?: Array<AtividadeOrderByInput>;
  skip?: number;
  take?: number;
};
