import * as graphql from "@nestjs/graphql";
import { AtividadeResolverBase } from "./base/atividade.resolver.base";
import { Atividade } from "./base/Atividade";
import { AtividadeService } from "./atividade.service";

@graphql.Resolver(() => Atividade)
export class AtividadeResolver extends AtividadeResolverBase {
  constructor(protected readonly service: AtividadeService) {
    super(service);
  }
}
