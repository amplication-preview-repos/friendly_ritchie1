import { SortOrder } from "../../util/SortOrder";

export type IncidenteOrderByInput = {
  createdAt?: SortOrder;
  dataOcorrencia?: SortOrder;
  descricaoIncidente?: SortOrder;
  fotoIncidente?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
