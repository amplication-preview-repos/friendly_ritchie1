import { SortOrder } from "../../util/SortOrder";

export type MotoristaOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  nomeMotorista?: SortOrder;
  numeroRegistro?: SortOrder;
  updatedAt?: SortOrder;
  veiculo?: SortOrder;
};
