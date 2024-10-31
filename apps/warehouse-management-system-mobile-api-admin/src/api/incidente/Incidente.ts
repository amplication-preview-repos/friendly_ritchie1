import { JsonValue } from "type-fest";

export type Incidente = {
  createdAt: Date;
  dataOcorrencia: Date | null;
  descricaoIncidente: string | null;
  fotoIncidente: JsonValue;
  id: string;
  updatedAt: Date;
};
