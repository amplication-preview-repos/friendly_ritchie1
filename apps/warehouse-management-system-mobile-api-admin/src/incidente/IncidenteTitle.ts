import { Incidente as TIncidente } from "../api/incidente/Incidente";

export const INCIDENTE_TITLE_FIELD = "id";

export const IncidenteTitle = (record: TIncidente): string => {
  return record.id?.toString() || String(record.id);
};
