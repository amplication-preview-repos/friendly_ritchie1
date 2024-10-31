import { EventoWhereUniqueInput } from "./EventoWhereUniqueInput";
import { EventoUpdateInput } from "./EventoUpdateInput";

export type UpdateEventoArgs = {
  where: EventoWhereUniqueInput;
  data: EventoUpdateInput;
};
