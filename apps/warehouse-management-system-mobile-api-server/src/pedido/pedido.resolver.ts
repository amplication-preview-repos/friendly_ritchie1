import * as graphql from "@nestjs/graphql";
import { PedidoResolverBase } from "./base/pedido.resolver.base";
import { Pedido } from "./base/Pedido";
import { PedidoService } from "./pedido.service";

@graphql.Resolver(() => Pedido)
export class PedidoResolver extends PedidoResolverBase {
  constructor(protected readonly service: PedidoService) {
    super(service);
  }
}
