import { Motorista as TMotorista } from "../api/motorista/Motorista";

export const MOTORISTA_TITLE_FIELD = "nomeMotorista";

export const MotoristaTitle = (record: TMotorista): string => {
  return record.nomeMotorista?.toString() || String(record.id);
};
