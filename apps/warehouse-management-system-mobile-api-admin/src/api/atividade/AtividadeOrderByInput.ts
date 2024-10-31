import { SortOrder } from "../../util/SortOrder";

export type AtividadeOrderByInput = {
  createdAt?: SortOrder;
  dataInicio?: SortOrder;
  dataTermino?: SortOrder;
  descricaoAtividade?: SortOrder;
  id?: SortOrder;
  statusAtividade?: SortOrder;
  updatedAt?: SortOrder;
};
