import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PedidoServiceBase } from "./base/pedido.service.base";

@Injectable()
export class PedidoService extends PedidoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
