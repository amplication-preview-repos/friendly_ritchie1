export type Atividade = {
  createdAt: Date;
  dataInicio: Date | null;
  dataTermino: Date | null;
  descricaoAtividade: string | null;
  id: string;
  statusAtividade?: "Option1" | null;
  updatedAt: Date;
};
