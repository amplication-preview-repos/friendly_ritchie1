import { Atividade as TAtividade } from "../api/atividade/Atividade";

export const ATIVIDADE_TITLE_FIELD = "id";

export const AtividadeTitle = (record: TAtividade): string => {
  return record.id?.toString() || String(record.id);
};
