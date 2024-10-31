import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type IncidenteWhereInput = {
  dataOcorrencia?: DateTimeNullableFilter;
  descricaoIncidente?: StringNullableFilter;
  fotoIncidente?: JsonFilter;
  id?: StringFilter;
};
