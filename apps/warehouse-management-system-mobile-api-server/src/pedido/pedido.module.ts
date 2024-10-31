import { Module } from "@nestjs/common";
import { PedidoModuleBase } from "./base/pedido.module.base";
import { PedidoService } from "./pedido.service";
import { PedidoController } from "./pedido.controller";
import { PedidoResolver } from "./pedido.resolver";

@Module({
  imports: [PedidoModuleBase],
  controllers: [PedidoController],
  providers: [PedidoService, PedidoResolver],
  exports: [PedidoService],
})
export class PedidoModule {}
