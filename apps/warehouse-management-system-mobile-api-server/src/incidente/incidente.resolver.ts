import * as graphql from "@nestjs/graphql";
import { IncidenteResolverBase } from "./base/incidente.resolver.base";
import { Incidente } from "./base/Incidente";
import { IncidenteService } from "./incidente.service";

@graphql.Resolver(() => Incidente)
export class IncidenteResolver extends IncidenteResolverBase {
  constructor(protected readonly service: IncidenteService) {
    super(service);
  }
}
