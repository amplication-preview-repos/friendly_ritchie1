import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventoWhereInput = {
  dataEvento?: DateTimeNullableFilter;
  descricaoEvento?: StringNullableFilter;
  id?: StringFilter;
  localEvento?: StringNullableFilter;
  tituloEvento?: StringNullableFilter;
};
