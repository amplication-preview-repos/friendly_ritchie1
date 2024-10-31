import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PedidoService } from "./pedido.service";
import { PedidoControllerBase } from "./base/pedido.controller.base";

@swagger.ApiTags("pedidos")
@common.Controller("pedidos")
export class PedidoController extends PedidoControllerBase {
  constructor(protected readonly service: PedidoService) {
    super(service);
  }
}
