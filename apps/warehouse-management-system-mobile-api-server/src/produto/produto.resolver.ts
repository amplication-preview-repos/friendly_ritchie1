import * as graphql from "@nestjs/graphql";
import { ProdutoResolverBase } from "./base/produto.resolver.base";
import { Produto } from "./base/Produto";
import { ProdutoService } from "./produto.service";

@graphql.Resolver(() => Produto)
export class ProdutoResolver extends ProdutoResolverBase {
  constructor(protected readonly service: ProdutoService) {
    super(service);
  }
}
