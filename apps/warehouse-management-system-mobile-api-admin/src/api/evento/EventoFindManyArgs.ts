import { EventoWhereInput } from "./EventoWhereInput";
import { EventoOrderByInput } from "./EventoOrderByInput";

export type EventoFindManyArgs = {
  where?: EventoWhereInput;
  orderBy?: Array<EventoOrderByInput>;
  skip?: number;
  take?: number;
};
