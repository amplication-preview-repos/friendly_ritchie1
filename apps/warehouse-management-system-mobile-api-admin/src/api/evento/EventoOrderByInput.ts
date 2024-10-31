import { SortOrder } from "../../util/SortOrder";

export type EventoOrderByInput = {
  createdAt?: SortOrder;
  dataEvento?: SortOrder;
  descricaoEvento?: SortOrder;
  id?: SortOrder;
  localEvento?: SortOrder;
  tituloEvento?: SortOrder;
  updatedAt?: SortOrder;
};
