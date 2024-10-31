import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AtividadeWhereInput = {
  dataInicio?: DateTimeNullableFilter;
  dataTermino?: DateTimeNullableFilter;
  descricaoAtividade?: StringNullableFilter;
  id?: StringFilter;
  statusAtividade?: "Option1";
};
