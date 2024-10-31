import { IncidenteWhereInput } from "./IncidenteWhereInput";
import { IncidenteOrderByInput } from "./IncidenteOrderByInput";

export type IncidenteFindManyArgs = {
  where?: IncidenteWhereInput;
  orderBy?: Array<IncidenteOrderByInput>;
  skip?: number;
  take?: number;
};
