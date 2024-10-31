import { InputJsonValue } from "../../types";

export type IncidenteUpdateInput = {
  dataOcorrencia?: Date | null;
  descricaoIncidente?: string | null;
  fotoIncidente?: InputJsonValue;
};
