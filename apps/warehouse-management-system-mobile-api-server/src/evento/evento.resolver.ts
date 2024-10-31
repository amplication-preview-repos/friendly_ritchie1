import * as graphql from "@nestjs/graphql";
import { EventoResolverBase } from "./base/evento.resolver.base";
import { Evento } from "./base/Evento";
import { EventoService } from "./evento.service";

@graphql.Resolver(() => Evento)
export class EventoResolver extends EventoResolverBase {
  constructor(protected readonly service: EventoService) {
    super(service);
  }
}
