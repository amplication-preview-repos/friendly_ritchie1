import { Evento as TEvento } from "../api/evento/Evento";

export const EVENTO_TITLE_FIELD = "localEvento";

export const EventoTitle = (record: TEvento): string => {
  return record.localEvento?.toString() || String(record.id);
};
