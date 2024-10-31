import * as graphql from "@nestjs/graphql";
import { MotoristaResolverBase } from "./base/motorista.resolver.base";
import { Motorista } from "./base/Motorista";
import { MotoristaService } from "./motorista.service";

@graphql.Resolver(() => Motorista)
export class MotoristaResolver extends MotoristaResolverBase {
  constructor(protected readonly service: MotoristaService) {
    super(service);
  }
}
