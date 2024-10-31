import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MotoristaWhereInput = {
  id?: StringFilter;
  nomeMotorista?: StringNullableFilter;
  numeroRegistro?: StringNullableFilter;
  veiculo?: StringNullableFilter;
};
