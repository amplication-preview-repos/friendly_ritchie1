import { InputJsonValue } from "../../types";

export type IncidenteCreateInput = {
  dataOcorrencia?: Date | null;
  descricaoIncidente?: string | null;
  fotoIncidente?: InputJsonValue;
};
